'use strict';

var scopes = 'user-read-private user-read-email streaming user-top-read user-follow-modify';
var my_client_id = process.env.spotify_client_id;

module.exports = {
    method: 'GET',
    path: '/login',
    options:{
        auth:{
            mode:'try'
        }
    },
    handler: (request, reply) => {
        return reply.redirect('https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' + my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' + encodeURIComponent('https://quizical.tabishimran.com/api/authenticate')
        +'&show_dialog=true');
    }
};