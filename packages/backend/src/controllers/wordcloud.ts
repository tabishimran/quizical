const User = require('../models/user');
import fetch,{Headers} from 'node-fetch'
const request = require('../utils/authenticatedRequest');


module.exports = async function wordcloud(request,reply){
    const session = request.state;
    const topArtistsURL = "https://api.spotify.com/v1/me/following?type=artist&limit=50";
    const topArtists = await request(topArtistsURL,session,'GET');
    return '<h1>wordcloud</h1>'+JSON.stringify(topArtists);
}