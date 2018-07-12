import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule }    from '@angular/forms';
// Routing 
import { AppRoutingModule } from './app.routing';
//component
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { UserListComponent } from './layout/user-list/user-list.component';
import { UserHistoryComponent } from './layout/user-history/user-history.component';
//services
import { CanActivateService } from './services/can-activate.service'
import { SocketService } from './services/socket.service';


export function connectSocketServices(socketservice: SocketService) {
  return () => {
    let users = localStorage.getItem('users');
    if(users){
       let sendDetails = JSON.parse(users);
       socketservice.newUser(sendDetails);
       return true;
    }else{
       return false
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    LayoutComponent,
    DashboardComponent,
    UserListComponent,
    UserHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CanActivateService,
    SocketService,
    {
      provide: APP_INITIALIZER,
      useFactory:connectSocketServices,
      deps:[SocketService],
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
