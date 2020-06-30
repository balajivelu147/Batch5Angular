import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { UGComponent } from './ug/ug.component';
import { PGComponent } from './pg/pg.component';


const routes: Routes = [
  {
    path: '',
    component: ResultsComponent
    // ,
    // children: [
    //   { path: 'ug', component: UGComponent},
    //   { path: 'pg', component: PGComponent}
    // ]
  }
  , { path: 'ug/:name/:year', component: UGComponent},
  { path: 'pg', component: PGComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
