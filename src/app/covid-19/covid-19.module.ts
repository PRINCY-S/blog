import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Covid19RoutingModule } from './covid-19-routing.module';
import { Covid19Component } from './covid19/covid19.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    Covid19Component
  ],
  imports: [
    CommonModule,
    Covid19RoutingModule,
    HeaderModule
  ]
})
export class Covid19Module { }
