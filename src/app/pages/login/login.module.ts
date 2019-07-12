// import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";

registerLocaleData(zh);

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    // BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
