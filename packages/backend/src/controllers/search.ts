const authenticatedRequest = require('../utils/authenticatedRequest');


module.exports = async function search(request,reply){
    const session = request.state;
    const params = new URLSearchParams();
    params.append('type','artist');
    params.append('limit','10');
    params.append('q',request.query.key);
    const searchURL = new URL("https://api.spotify.com/v1/search")
    searchURL.search = params.toString()
    const data = authenticatedRequest(searchURL.toString(),session,{method:'GET'})
    return reply.response(data);
}