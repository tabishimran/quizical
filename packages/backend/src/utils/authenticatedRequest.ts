import fetch,{Headers} from 'node-fetch'

const _ = require('lodash');
const User = require('../models/user');

async function request(url,session,options){
    const uri = session.sid.id;
    const user = await User.findOne({"uri":uri});
    var headers = await generateHeader(user.tokens);
    options.headers = headers;
    const dataObj = await sendRequest(url,options);
    if(_.get(dataObj,'error.message')=="The access token expired"){
            console.log("token expired, refreshing");
            var tokens = await refreshTokens(user);
            headers = await generateHeader(tokens);
            options.headers = headers;
            const dataObj = await sendRequest(url,options);
    }
    return dataObj;
}

async function refreshTokens(user){
    const params = new URLSearchParams();  
    params.append('grant_type','refresh_token');
    params.append('refresh_token',user.tokens.refresh_token);
    var plainTextHeader = process.env.spotify_client_id+':'+process.env.spotify_client_secret;
    let encodedHeader = Buffer.from(plainTextHeader).toString('base64');
    const headerObj={Authorization:"Basic "+encodedHeader}
    const headers = new Headers(headerObj);
    const data = await sendRequest("https://accounts.spotify.com/api/token",{method:"POST",body:params,headers:headers});
    const token = data.access_token;
    const tokenObj = user.tokens;
    tokenObj.access_token = token;
    await User.findOneAndUpdate({"uri":user.uri},{"tokens":tokenObj})
    return token;
}

async function generateHeader(tokens){
    var headerObj={Authorization:'Bearer '+tokens.access_token}
    const headers  = new Headers(headerObj);
    return headers;
}


async function sendRequest(url:string,options:object) {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}

module.exports = request