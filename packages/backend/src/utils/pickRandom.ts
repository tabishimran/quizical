
module.exports = function pickRandomSongs(inputList,number,filterFunction={}){
    var output = [];
    var input = inputList
    if(filterFunction!={}){
        input = input.filter(filterFunction)
    }
    while(output.length!=number){
        var index = Math.floor(Math.random()*input.length)
        if(!output.some((obj)=>obj.uri == input[index].uri || obj.name == input[index].uri)){
            output = output.concat(input[index]);
        }
    }
    return output;
}