import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitiesRoutingModule } from './opportunities-routing.module';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    OpportunitiesComponent
  ],
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    HeaderModule
  ]
})
export class OpportunitiesModule { }
