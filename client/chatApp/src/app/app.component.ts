import { Component,OnDestroy } from '@angular/core';
//import * as io from 'socket.io-client';
import { SocketService } from './services/socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
 
  constructor(private socketservice: SocketService){
  
  }

  ngOnDestroy(){
    this.socketservice.disconnect();
  }
}
