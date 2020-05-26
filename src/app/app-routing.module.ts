import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { StepperComponent } from './pages/stepper/stepper.component'
import { HomeComponent } from './pages/home/home.component'
import { Example1Component } from './pages/example1/example1.component'
import { Example2Component } from './pages/example2/example2.component'
import { Example3Component } from './pages/example3/example3.component'
import { FxFlexComponent } from './pages/fxflex/fxflex.component'



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'example1', component: Example1Component},
  { path: 'example2', component: Example2Component},
  { path: 'example3', component: Example3Component},
  { path: 'fxflex', component: FxFlexComponent }

  // { path: 'companies', component: CompanyListComponent },
  // { path: 'company/:id', component: CompanyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}