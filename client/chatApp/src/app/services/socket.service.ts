import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

	private BASE_URL = 'http://localhost:8080';  
  	private socket;

  	constructor() {
		this.connectSocketURL();  
	  }
	  
	connectSocketURL(){
		this.socket = io(this.BASE_URL);  
	}  

  	connect():void{
		this.connectSocketURL();  
  		this.socket.on('connect',function(){
			console.log("socket connected");
		  });
  	}

 	sendMessage(msg):void{
		this.socket.emit('sendMsg',msg);
 	}

 	recieveMessage():Observable<Object>{
 		let observable = new Observable(observer => {
			this.socket.on('newMsg',function(resp){
				observer.next(resp); 
			});
			
		 });
		 return observable;
 	}

 	newUser(user):void{
 		this.socket.emit('newUser',user);
 	}


 	getUsers():Observable<Object>{
 		this.socket.emit('getUsersList');
 		let observable = new Observable(observer => {
			this.socket.on('getUsers',function(resp){
				console.log(resp,"getUsers");
				observer.next(resp); 
			});
			
		 });
		 return observable;
 	}
   

    disconnect():void{
		this.socket.disconnect();
    }

}
