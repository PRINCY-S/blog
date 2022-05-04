import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyApproachComponent } from './my-approach/my-approach.component';

const routes: Routes = [
  {
    path: '',
    component: MyApproachComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyApproachRoutingModule { }
