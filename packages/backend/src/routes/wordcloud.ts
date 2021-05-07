const wordcloud = require('../controllers/search');

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