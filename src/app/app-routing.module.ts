import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

import { StepperComponent } from './pages/stepper/stepper.component'
import { HomeComponent } from './pages/home/home.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { FxFlexComponent } from './pages/fxflex/fxflex.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'profile', component: ProfileComponent},
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