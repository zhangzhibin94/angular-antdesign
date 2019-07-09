import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import {
  NzDemoBreadcrumbRouterComponent,
  NzDemoFormRegisterComponent,
  NzDemoTableEditCellComponent,
  WelcomeComponent
} from './welcome.component';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {IconsProviderModule} from "../../icons-provider.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzFormModule } from 'ng-zorro-antd/form';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [WelcomeRoutingModule,

    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NzBreadCrumbModule,
    NzFormModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [WelcomeComponent,NzDemoBreadcrumbRouterComponent,NzDemoFormRegisterComponent,NzDemoTableEditCellComponent],
  exports: [WelcomeComponent,NzDemoBreadcrumbRouterComponent,NzDemoFormRegisterComponent,NzDemoTableEditCellComponent]
})
export class WelcomeModule { }
