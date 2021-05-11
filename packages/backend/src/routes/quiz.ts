const quiz = require('../controllers/quiz');

module.exports = {
    method: 'GET',
    path: '/quiz',
    options:{
        auth:{
            mode:'required'
        }
    },
    handler: quiz
}