import { Component, OnInit, Input } from '@angular/core';
import { Router, Route } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  smallScreen: boolean;

  

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
    ) {
        breakpointObserver.observe([
          Breakpoints.XSmall,
          Breakpoints.Small
           ]).subscribe(result => {
            this.smallScreen = result.matches;
      });
    }
    
  ngOnInit() {}
}