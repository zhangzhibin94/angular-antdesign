import {NgModule} from '@angular/core';

import {SubRoutingModule} from './sub-routing.module';

import {SubComponent} from './sub.component';
import {IconsProviderModule} from "../../../icons-provider.module";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzFormModule} from 'ng-zorro-antd/form';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [SubRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NzBreadCrumbModule,
    NzFormModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [SubComponent],
  exports: [SubComponent]
})
export class SubModule { }
