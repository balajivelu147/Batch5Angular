import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FirstPageManualComponent } from './first-page-manual/first-page-manual.component';
import { MyFirstPageComponent } from './my-first-page/my-first-page.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ExamsModule } from './Exams/exams.module';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { UserResolver } from './shared/guards/resolve.guard';


const routes: Routes = [
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent,
    canActivate: [AuthGuardGuard],
    resolve: [UserResolver]
  },
  {
    path: 'first-page-manual',
    component: FirstPageManualComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'my-first-page',
    component: MyFirstPageComponent
  },
  {
    path: 'template-driven',
    component: TemplateDrivenComponent
  },
  // {
  //   path: '**',
  //   redirectTo: 'first-page-manual'
  // },
  {
    path: 'exams',
    loadChildren: () => ExamsModule
    // src\app\Exams\exams.module.ts
  }
  // loadChildren: () => TestModule

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
