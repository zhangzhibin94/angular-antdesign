import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {IconsProviderModule} from "../../icons-provider.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  imports: [WelcomeRoutingModule,

    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule
   ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
