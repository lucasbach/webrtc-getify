function readFile(filename){
    var sq = asq();
    fs.readFile(filename, sq.errfcb());
    return sq;
}

function delayMsg(done, contents){
    setTimeout(function(){
        done(contents);
    }, 1000);
}

function say(filename){
    return readFile(filename).then(delayMsg);
};

var fs = require('fs');
var asq = require('asynquence');
require('asynquence-contrib');

module.exports.say = say;