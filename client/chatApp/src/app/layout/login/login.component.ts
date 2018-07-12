import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  constructor(private router: Router,private socketservice: SocketService) { }

  ngOnInit() {
  }

  login(){
    if(this.model.username && this.model.password){
      let users = JSON.stringify(this.model);
      this.socketservice.connect();
      this.socketservice.newUser(this.model);
      localStorage.setItem("users",users);
      this.router.navigate(['/layout/dashboard']);
    }
  }

}
