import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login.component";

const routes: Routes = [
  // { path: '', redirectTo:"/login" },
  { path: '', component:LoginComponent },
  // { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
  // {}
  // { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
