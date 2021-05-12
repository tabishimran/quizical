const User = require('../models/user');
import { ResponseToolkit } from 'hapi';
const authenticatedRequest = require('../utils/authenticatedRequest');
const pickRandomSongs = require('../utils/pickRandom');


module.exports = async function getQuiz(request, reply: ResponseToolkit) {
    const artistId = request.query.artist;
    const session = request.state;
    const artistAlbums = await getAlbums(artistId, session)
    const artistSongs = await getTracks(artistAlbums, session);
    const questions = await createQuestions(artistSongs);
    return reply.response(questions);
}

async function getAlbums(artistId, session) {
    const data = await authenticatedRequest("https://api.spotify.com/v1/artists/" + artistId + "/albums?include_groups=album,single&market=from_token&limit=50", session, { method: 'GET' });
    const albums = data.items.map(function (album) {
        return {
            name: album.name,
            type: album.album_type,
            release: album.release_date,
            uri: album.uri,
            tracks: album.total_tracks
        }
    });
    return albums;
}

async function getTracks(albums, session) {
    var tracks = [];
    for (var i = 0; i < albums.length; i++) {
        var album = albums[i];
        if (album.type == "single" || album.type == "album") {
            const albumUri = album.uri.split(":")[2];
            const url = "https://api.spotify.com/v1/albums/" + albumUri + "/tracks?market=from_token";
            const songs = await authenticatedRequest(url, session, { method: 'GET' });
            const songSet = songs.items.map(function(song){
                song.album = album.name;
                song.release = album.release;
                song.albumType = album.type;
                return song;
            })
            tracks = tracks.concat(songSet);
        }
    }
    const trackSet = tracks.map(function (track) {
        return {
            name: track.name,
            uri: track.id,
            durationMs: track.duration_ms,
            preview: track.preview_url,
            album: track.album,
            release: track.release,
            albumType: track.albumType,
            artists: track.artists.map(function (artist) {
                return { name: artist.name, type: artist.type, uri: artist.uri }
            })
        }
    })
    return trackSet;
}

// currently only creates identify type questions
async function createQuestions(artistSongs) {
    var numberOfQuestions = 10;
    var numberOfOptions = 4;
    var trackList = pickRandomSongs(artistSongs,numberOfQuestions);
    var questions = trackList.map(function(track){
        var options = pickRandomSongs(artistSongs,4)
        options = options.filter(option=> option.name!=track.name)
        if(options.length==4) options.pop();
        options = options.concat(track)
        options = options.map((track)=>{
            return track.name
        })
        options.sort(()=>Math.random()-0.5);
        return {
            question:"Identify the song",
            answer:track.name,
            audio:track.preview,
            options:options
        }
    })
    return questions;
}
