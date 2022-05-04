import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleOrgRoutingModule } from './google-org-routing.module';
import { GoogleOrgComponent } from './google-org/google-org.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    GoogleOrgComponent
  ],
  imports: [
    CommonModule,
    GoogleOrgRoutingModule,
    HeaderModule
  ]
})
export class GoogleOrgModule { }
