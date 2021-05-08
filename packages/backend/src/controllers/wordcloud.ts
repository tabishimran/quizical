const User = require('../models/user');
import { ResponseToolkit } from 'hapi';
const authenticatedRequest = require('../utils/authenticatedRequest');


module.exports = async function wordcloud(request,reply:ResponseToolkit){
    const session = request.state;
    const topArtistsURL = "https://api.spotify.com/v1/me/following?type=artist&limit=50";
    const options = {method:'GET'}
    const topArtists = await authenticatedRequest(topArtistsURL,session,options);
    const wordCloud = await generateWordCloud(topArtists);
    return reply.response(wordCloud);
}

async function generateWordCloud(topArtists){
    var artists = topArtists.artists.items;
    var wordCloud =  artists.map(function(artist){
        return {value:artist.name,count:artist.popularity}
    });
    return wordCloud;
}