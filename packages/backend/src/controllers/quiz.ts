const User = require('../models/user');
import { ResponseToolkit } from 'hapi';
const authenticatedRequest = require('../utils/authenticatedRequest');


module.exports = async function getQuiz(request,reply:ResponseToolkit){
    const artistId = request.query.artist;
    const session = request.state;
    // get related artists
    // get all albums for artist
    // get one album for related artists
    // get all songs for artist
    // get all songs for related artists
    // pick 70-100% artist songs, pick 30-0% related artists songs
    // 
    return reply.response({});
}

async function getAlbums(artistId,session){
    const data = await authenticatedRequest("https://api.spotify.com/v1/artists/"+artistId+"/albums",session,{method:'GET'});

}

async function getRelatedArtists(){

}

async function getTracks(){

}

async function createQuestions(){

}
