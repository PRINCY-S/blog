import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StackedBarGraphComponent } from './stacked-bar-graph/stacked-bar-graph.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import ('./google-org/google-org.module').then(e => e.GoogleOrgModule)
  },
  {
    path: 'covid-19',
    loadChildren: () => import ('./covid-19/covid-19.module').then (e => e.Covid19Module)
  },
  {
    path: 'my-work',
    loadChildren: () => import ('./my-work/my-work.module').then (e => e.MyWorkModule)
  },
  {
    path: 'my-approach',
    loadChildren: () => import ('./my-approach/my-approach.module').then (e => e.MyApproachModule)
  },
  {
    path: 'opportunities',
    loadChildren: () => import ('./opportunities/opportunities.module').then (e => e.OpportunitiesModule)
  },
  {
    path: 'latest',
    loadChildren: () => import ('./latest/latest.module').then (e => e.LatestModule)
  },
  {
    path: 'date-picker',
    loadChildren: () => import ('./date-picker/date-picker/date-picker.module').then (e => e.DatePickerModule)
  },
  {
    path: 'stacked-bar-graph',
    component:StackedBarGraphComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
