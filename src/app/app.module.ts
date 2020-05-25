import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './pages/home/home.component'
import { StepperComponent} from './pages/stepper/stepper.component'
import { Example1Component } from './pages/example1/example1.component'
import { FxFlexComponent } from './pages/fxflex/fxflex.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Example2Component } from './pages/example2/example2.component';
// import { TestService } from './services/test/test.service'

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
    ],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, StepperComponent, Example1Component, FxFlexComponent, Example2Component ],
  // providers: [TestService],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
    
 }
