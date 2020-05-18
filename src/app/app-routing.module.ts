import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { StepperComponent} from './pages/stepper/stepper.component'




const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'stepper', component: StepperComponent }
  // { path: 'companies', component: CompanyListComponent },
  // { path: 'company/:id', component: CompanyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }