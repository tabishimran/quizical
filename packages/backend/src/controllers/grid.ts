const User = require('../models/user');
import { ResponseToolkit } from 'hapi';
const authenticatedRequest = require('../utils/authenticatedRequest');


module.exports = async function grid(request,reply:ResponseToolkit){
    const session = request.state;
    const topArtistsURL = "https://api.spotify.com/v1/me/top/artists?limit=50";
    const options = {method:'GET'}
    const topArtists = await authenticatedRequest(topArtistsURL,session,options);
    const imageGrid = await generateImageGrid(topArtists);
    return reply.response(imageGrid);
}

async function generateImageGrid(topArtists){
    var artists = topArtists.items;
    var imageGrid =  artists.map(function(artist){
        var image = artist.images[0];
        return {
            title:artist.name,
            popularity:artist.popularity,
            img:image.url,
            imgHeight:image.height,
            imgWidth:image.width,
            uri:artist.uri
        }
    });
    return imageGrid;
}