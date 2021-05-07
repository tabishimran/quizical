module.exports = {
    method: 'GET',
    path: '/search',
    options:{
        auth:{
            mode:'required'
        }
    },
    handler: (request,reply)=>{
        return '<h1> works </h1>'
    }
}