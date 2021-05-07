const search = require('../controllers/search');

module.exports = {
    method: 'GET',
    path: '/search',
    options: {
        auth: {
            mode: 'required'
        }
    },
    handler: search
}