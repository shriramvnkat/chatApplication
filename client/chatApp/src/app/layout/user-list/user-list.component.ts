import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   users :  any = {};
   userList : any = [];
  constructor(private socketservice: SocketService,private router: Router) {
     this.users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};
    // this.socketservice.newUser(this.users);
   }

  ngOnInit() {
  	this.socketservice.getUsers().subscribe((response) =>{
       let result : any= response;
       if(result.length){
          this.userList = (result);
        }
    })
  }

  logout(){
    this.socketservice.disconnect();
    localStorage.clear();
  	 this.router.navigate(['/login']);
  }


}
