import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';

@Injectable()
export class CanActivateService implements CanActivate {

  constructor(private router : Router) { }

  canActivate(){
    if(localStorage.getItem('users')){
        return true
    }
    this.router.navigate(['/login']);
    return false;
  }


}
