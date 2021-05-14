const authenticatedRequest = require('../utils/authenticatedRequest');
const _ = require('lodash');


module.exports = async function search(request, reply) {
    const session = request.state;
    const params = new URLSearchParams();
    params.append('type', 'artist');
    params.append('limit', '10');
    params.append('q', request.query.key);
    const searchURL = new URL("https://api.spotify.com/v1/search")
    searchURL.search = params.toString()
    const data = await authenticatedRequest(searchURL.toString(), session, { method: 'GET' })
    const searchResults = await generateSearchResults(data);
    return reply.response(searchResults);
}

async function generateSearchResults(topArtists) {
    var artists = _.get(topArtists,'artists.items')//topArtists.artists.items;
    if(artists==undefined) artists=[]
    var searchResults = artists.map(function (artist) {
        if (artist.images.length) {
            var image = artist.images[0];
            return {
                title: artist.name,
                popularity: artist.popularity,
                img: image.url,
                imgHeight: image.height,
                imgWidth: image.width,
                uri: artist.uri
            }
        }
    });
    return searchResults;
}