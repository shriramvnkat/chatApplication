import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../services/socket.service'
@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit  {

   userHistory : any = {};
  constructor(private socketservice: SocketService) { 
    this.userHistory.messageList = [];
    this.userHistory.username = localStorage.getItem('users') ? (JSON.parse(localStorage.getItem('users'))).username : '';
    this.userHistory.message = '';
  }

  ngOnInit() {

    this.socketservice.recieveMessage().subscribe((response) =>{
       let result : any= response;
       if(result){
          this.userHistory.messageList.push(result);
        }
    })
   
  }

  sendMessage():void{
    let message = this.userHistory.message;
    this.userHistory.message = '';
    let sendMessage : any = {
      data:message
          } 
      this.socketservice.sendMessage(sendMessage);
  }


}
