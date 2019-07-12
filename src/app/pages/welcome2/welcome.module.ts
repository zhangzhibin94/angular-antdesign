import {NgModule} from '@angular/core';

import {WelcomeRoutingModule2} from './welcome-routing.module';

import {WelcomeComponent2} from './welcome.component';
import {IconsProviderModule} from "../../icons-provider.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzFormModule} from 'ng-zorro-antd/form';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [WelcomeRoutingModule2,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NzBreadCrumbModule,
    NzFormModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [WelcomeComponent2],
  exports: [WelcomeComponent2]
})
export class WelcomeModule2 { }
