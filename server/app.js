var express = require('express');
var app    = express();
var cors =  require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var io = require("socket.io").listen(app.listen(8080));
//var models    = require('./models');
users = [];
connections = [];

io.on('connection',function(socket){
	connections.push(socket)
	console.log("new connection made",connections.length)
	 
	 socket.emit('news', { hello: 'world' });

	 socket.on('sendMsg', function(msg){
	 	let sendMessage = {
			    data:msg.data,
			   	user:socket.username
			} 
			console.log(sendMessage);
		io.emit('newMsg', sendMessage);

	  });

	 socket.on('newUser',function(data,callback){
	 	if(data.username){
	 		socket.username = data.username;
	 		users.push(socket.username);
	 		console.log(users);
	 		updateUserNames();
	 	}
	 });

	 socket.on('getUsersList',function(){
	 		updateUserNames();
	 })

	 function updateUserNames(){
	 	io.emit('getUsers',users);
	 }
	  
	 socket.on('disconnect', function(){
	 	console.log('disconnect')
	 	users.splice(users.indexOf(socket.username),1);
	 	console.log(users);
	 	updateUserNames();
	 	connections.splice(connections.indexOf(socket),1);
	  });
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());


module.exports = app;