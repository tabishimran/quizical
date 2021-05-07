module.exports = async function search(request,reply){
    const session = request.state;
    return '<h1>search</h1>'+JSON.stringify(session);
}