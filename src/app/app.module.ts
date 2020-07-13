import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstPageComponent } from './my-first-page/my-first-page.component';
import { FirstPageManualComponent } from './first-page-manual/first-page-manual.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LeftNavPanelComponent } from './shared/left-nav-panel/left-nav-panel.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { UGComponent } from './Exams/ug/ug.component';
import { PGComponent } from './Exams/pg/pg.component';
import { ResultsComponent } from './Exams/results/results.component';
import { MeritComponent } from './students/merit/merit.component';
import { SportsQuotaComponent } from './students/sports-quota/sports-quota.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BackgroundHighlightDirective } from './shared/directives/background-highlight.directive';
import { ArithmeticPipe } from './shared/arithmetic.pipe';
import { UserResolver } from './shared/guards/resolve.guard';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstPageComponent,
    FirstPageManualComponent,
    TemplateDrivenComponent,
    ReactiveFormsComponent,
    LeftNavPanelComponent,
    MeritComponent,
    SportsQuotaComponent,
    BackgroundHighlightDirective,
    ArithmeticPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
