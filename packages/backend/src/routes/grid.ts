const wordcloud = require('../controllers/grid');

module.exports = {
    method: 'GET',
    path: '/grid',
    options:{
        auth:{
            mode:'required'
        }
    },
    handler: wordcloud
}