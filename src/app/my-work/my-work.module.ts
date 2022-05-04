import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorkRoutingModule } from './my-work-routing.module';
import { MyWorkComponent } from './my-work/my-work.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    MyWorkComponent
  ],
  imports: [
    CommonModule,
    MyWorkRoutingModule,
    HeaderModule
  ]
})
export class MyWorkModule { }
