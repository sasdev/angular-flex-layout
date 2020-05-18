import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { StepperComponent } from './pages/stepper/stepper.component'
import { HomeComponent } from './pages/home/home.component'




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stepper', component: StepperComponent }
  // { path: 'companies', component: CompanyListComponent },
  // { path: 'company/:id', component: CompanyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}