import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyApproachRoutingModule } from './my-approach-routing.module';
import { MyApproachComponent } from './my-approach/my-approach.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    MyApproachComponent
  ],
  imports: [
    CommonModule,
    MyApproachRoutingModule,
    HeaderModule
  ]
})
export class MyApproachModule { }
