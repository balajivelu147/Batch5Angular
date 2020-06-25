import { NgModule } from '@angular/core';
import { PGComponent } from './pg/pg.component';
import { ResultsComponent } from './results/results.component';
import { ExamsRoutingModule } from './exams-routing.module';
import { UGComponent } from './ug/ug.component';


@NgModule({
  declarations: [
    UGComponent,
    PGComponent,
    ResultsComponent
  ],
  imports: [
    ExamsRoutingModule
  ]
})
export class ExamsModule { }
