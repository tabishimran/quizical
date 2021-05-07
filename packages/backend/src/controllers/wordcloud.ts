module.exports = async function wordcloud(request,reply){
    const session = request.state;
    return '<h1>wordcloud</h1>'+JSON.stringify(session);
}