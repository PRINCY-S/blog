import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerRoutingModule } from './date-picker-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePickerComponent } from '../date-picker.component';


@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    DatePickerRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DatePickerModule { }
