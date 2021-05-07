import fetch,{Headers} from 'node-fetch'
import {Request,ResponseToolkit} from 'hapi';

const User = require('../models/user');

module.exports = async function authenticate(request ,reply){
    // check if code was returned
    var code = request.query.code;
    if(!code) return reply.response(request.query.error).code(401);

    // generate tokens
    var tokens = await getTokens(code);
    if(tokens.error) return reply.response(tokens.error_description).code(401);
    
    // generate userdata 
    var userData = await getUserInfo(tokens.access_token);
    if(userData.error) return reply.response(userData.error).code(401);
    userData.tokens = tokens;

    // create account if it doesn't exist
    await createUser(userData);
    var userName = userData.display_name;
    var uri = userData.uri;
    request.cookieAuth.set({ id: uri,name:userName });

    // create and set cookies 

    return reply.redirect('/main');
}


async function getTokens(code){
    const params = new URLSearchParams();  
    params.append('grant_type','authorization_code');
    params.append('code',code);
    params.append('redirect_uri','https://quizical.tabishimran.com/api/authenticate');
    params.append('client_id',process.env.spotify_client_id);
    params.append('client_secret',process.env.spotify_client_secret)
    const response = await fetch('https://accounts.spotify.com/api/token', {method:"POST","body":params});
    const data = await response.json();
    return data;
}

async function getUserInfo(access_token){
    var headerObj={Authorization:'Bearer '+access_token}
    const headers  = new Headers(headerObj);
    const response = await fetch('https://api.spotify.com/v1/me',{method:"GET",headers:headers});
    const data = await response.json();
    return data;
}

async function createUser(userData){
    var user = await User.findOne({uri:userData.uri});
    if(user){
        // update tokens if the user is already in the DB
        await User.findOneAndUpdate({uri:userData.uri},{tokens:userData.tokens})
    }
    else{
        // add user to mongo
        var userObj = await generatePayload(userData);
        const newUser = new User(userObj);
        newUser.save(function(error,user){
            if(error){console.log(error)}
        })
    }
}

async function generatePayload(userData){
    var payload = {
        name:userData.display_name,
        country:userData.country,
        email:userData.email,
        uri:userData.uri,
        product:userData.product,
        tokens:userData.tokens
    }
    return payload;

}

