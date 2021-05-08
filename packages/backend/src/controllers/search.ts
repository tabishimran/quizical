const authenticatedRequest = require('../utils/authenticatedRequest');


module.exports = async function search(request,reply){
    const session = request.state;
    const params = new URLSearchParams();
    params.append('type','artist');
    params.append('limit','10');
    params.append('q',request.query.key);
    const searchURL = "https://api.spotify.com/v1/search";
    const data = authenticatedRequest(searchURL,session,{body:params})
    return reply.response(data);
}