const wordcloud = require('../controllers/wordcloud');

module.exports = {
    method: 'GET',
    path: '/wordcloud',
    options:{
        auth:{
            mode:'required'
        }
    },
    handler: wordcloud
}