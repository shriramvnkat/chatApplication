var http = require("http");
var app =  require("../app");
var server =  http.createServer(app);

server.listen(8081);
server.on('listening',onListening);
server.on('error',onError);

function onError(error){
    let err = error;
    switch(err.code){
        case 'EADDINUSE':
            console.log("8081 already in use");
            break;
       default:
        console.log("server error",error);
    }
}   

function onListening(){
    var addr = server.address();
    console.log(addr.port,"server listening port");
}
