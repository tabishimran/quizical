module.exports = async function wordcloud(request,reply){
    const session = request.auth.credentials;
    return '<h1>wordcloud</h1>'+JSON.stringify(session);
}