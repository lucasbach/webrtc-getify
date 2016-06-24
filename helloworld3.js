function readFile(filename){
    return asq(function (done){
        var stream = fs.createReadStream(filename);
        var contents = "";
        
        stream.pipe(fs.createWriteStream(filename + ".backup"));
        
        stream.on('data', function(chunck) {
            contents += chunck;
        });
        
        stream.on('end', function(){
            done(contents);
        });
    });
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