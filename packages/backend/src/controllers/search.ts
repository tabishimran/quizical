module.exports = async function search(request,reply){
    const session = request.auth.credentials
    return '<h1>search</h1>'+JSON.stringify(session);
}