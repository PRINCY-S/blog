import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StackedBarGraphComponent } from './stacked-bar-graph/stacked-bar-graph.component';
import { HeaderModule } from './header/header.module';




@NgModule({
  declarations: [
    AppComponent,
    StackedBarGraphComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
