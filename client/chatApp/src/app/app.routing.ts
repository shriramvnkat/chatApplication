import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component'
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component'
import { LayoutComponent } from './layout/layout/layout.component';
import { CanActivateService } from './services/can-activate.service'
const appRoute: Routes = [
    {path:'',redirectTo:'layout',pathMatch:'full'},
    {path:'layout',component:LayoutComponent,children:[
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path:'dashboard',component:DashboardComponent}
    ],canActivate:[CanActivateService]},
    {path:'login',component:LoginComponent},
    {path:'**',component:NotfoundComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule {}