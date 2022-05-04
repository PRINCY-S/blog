import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleOrgComponent } from './google-org/google-org.component';


const routes: Routes = [
  
  {
    path: '',
    component: GoogleOrgComponent,
  },
  {
    path: 'covid-19',
    loadChildren: () => import ('../covid-19/covid-19.module').then (e => e.Covid19Module)
  },
  {
    path: 'my-work',
    loadChildren: () => import ('../my-work/my-work.module').then (e => e.MyWorkModule)
  },
  {
    path: 'my-approach',
    loadChildren: () => import ('../my-approach/my-approach.module').then (e => e.MyApproachModule)
  },
  {
    path: 'opportunities',
    loadChildren: () => import ('../opportunities/opportunities.module').then (e => e.OpportunitiesModule)
  },
  {
    path: 'latest',
    loadChildren: () => import ('../latest/latest.module').then (e => e.LatestModule)
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleOrgRoutingModule { }
