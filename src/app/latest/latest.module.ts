import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestRoutingModule } from './latest-routing.module';
import { LatestComponent } from './latest/latest.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    LatestComponent
  ],
  imports: [
    CommonModule,
    LatestRoutingModule,
    HeaderModule
  ]
})
export class LatestModule { }
