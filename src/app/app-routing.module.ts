import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'welcome2', loadChildren: () => import('./pages/welcome2/welcome.module').then(m => m.WelcomeModule2) },
  { path: 'sub', loadChildren: () => import('./pages/welcome2/sub/sub.module').then(m => m.SubModule) },
  { path: 'welcomeSub', loadChildren: () => import('./pages/welcome/sub/sub.module').then(m => m.SubModule) },
  { path: 'login',loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }
  // { path: 'login',redirectTo: 'login' ,pathMatch: 'full' },
  // { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
