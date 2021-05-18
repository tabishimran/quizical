const User = require('../models/user');
const Album = require('../models/album');
const Track = require('../models/track')
import { ResponseToolkit } from 'hapi';
const authenticatedRequest = require('../utils/authenticatedRequest');
const pickRandomSongs = require('../utils/pickRandom');
const UserQuiz = require('../models/userQuiz');
const Quiz = require('../models/quiz');
const md5 = require("md5");
import { parseAlbum, parseTrack } from '../utils/parser';

module.exports = async function getQuiz(request, reply: ResponseToolkit) {
    const artistId = request.query.artist;
    const session = request.state;
    const cached = await findQuiz(artistId,session);
    if(cached==undefined){
        const artistAlbums = await getAlbums(artistId, session)
        const artistSongs = await getTracks(artistId);
        const questions = await createQuestions(artistSongs);
        const quizObj = {
            artistId:artistId,
            questions:questions,
            id:md5(JSON.stringify(questions))
        }
        const quiz = new Quiz(quizObj)
        quiz.save();
        await UserQuiz.findOneAndUpdate({ userId: session.sid.id }, { $push: {quizzes:quiz.id}});
        return reply.response(questions);
    }else{
        return reply.response(cached.questions);
    }
}

async function findQuiz(artistId, session) {
    var quiz,userQuizzes;
    const userURI = session.sid.id;
    const storedQuizzes = await Quiz.find({ artistId: artistId });
    var userQuizObject = await UserQuiz.findOne({ userId: userURI });
    if (!userQuizObject) {
        const initialUserQuizData = { userId: userURI, quizzes: [] }
        const newUserQuizObj = new UserQuiz(initialUserQuizData);
        await newUserQuizObj.save();
        userQuizzes = [];
    }
    else userQuizzes = userQuizObject.quizzes;
    if (storedQuizzes) {
        const newQuizzes = storedQuizzes.filter(function (each) { return !userQuizzes.some(elem => elem == each.id) })
        if (newQuizzes.length > 0) {
            quiz = newQuizzes.pop();
            await UserQuiz.findOneAndUpdate({ userId: userURI }, { quizzes: [...userQuizzes, quiz.id] })
        }
    }
    return quiz
}

async function getAlbums(artistId, session) {
    const storedAlbums = await Album.find({ "artists.id": artistId });
    const data = await authenticatedRequest("https://api.spotify.com/v1/artists/" + artistId + "/albums?include_groups=album,single&market=from_token&limit=50", session, { method: 'GET' });
    const albums = parseAlbum(data);
    const newAlbums = albums.filter(function (each) { return !storedAlbums.some(elem => elem.id == each.id) })
    console.log("Found " + newAlbums.length + " new albums.")
    for(let i =0;i<newAlbums.length;i++){
        var tracks = await fetchAlbumTracks(newAlbums[i],session);
        var album = new Album(albums[i]);
        album.save();
        tracks.map(function(track){
            var track = new Track(track);
            track.save();
        })
    }
    return albums;
}

async function fetchAlbumTracks(album, session) {
    const url = "https://api.spotify.com/v1/albums/" + album.id + "/tracks?market=from_token";
    var tracks = await authenticatedRequest(url, session, { method: 'GET' });
    var trackList = tracks.items.map(function (track) {
            track.album = album.name,
            track.release = album.release,
            track.albumId = album.id;
            track.albumType = album.type;
	    return track;
    })
    trackList = parseTrack(trackList);
    return trackList;
}


async function getTracks(artistId) {
    const trackList = await Track.find({"artists.id":artistId});
    return trackList;
}

// currently only creates identify type questions
async function createQuestions(artistSongs) {
    var numberOfQuestions = 10;
    var numberOfOptions = 4;
    var trackList = pickRandomSongs(artistSongs, numberOfQuestions);
    var questions = trackList.map(function (track) {
        var options = pickRandomSongs(artistSongs, 4)
        options = options.filter(option => option.name != track.name)
        if (options.length == 4) options.pop();
        options = options.concat(track)
        options = options.map((track) => {
            return track.name
        })
        options.sort(() => Math.random() - 0.5);
        return {
            question: "Identify the song",
            answer: track.name,
            audio: track.preview,
            options: options
        }
    })
    return questions;
}
