import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteGuard} from "./routeguard.service"
import {AppComponent} from "./app.component"
import {CartComponent} from "./cart/cart.component"
import {LoginComponent} from "./login/login.component"
import {SignupComponent} from "./signup/signup.component"
import {ProductdetailComponent} from "./productdetail/productdetail.component"
const routes: Routes = [
  {
     path:'',
     component:AppComponent
  },
  {
     path:'cart',
     loadChildren:'./cart/cart.module#CartModule',
     canActivate:[RouteGuard]
  },
  {
     path:'login',
     component:LoginComponent
  },
  { 
     path:'signup',
     component:SignupComponent
  },
  {path:'product/:id',
  component:ProductdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
