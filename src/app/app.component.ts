import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, Route } from '@angular/router';
import { MediaObserver,MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs'
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular'
  //Declare mediatype with type Subscription
  mediaSub: Subscription
  deviceXs: boolean

  //Observable for sidenav 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public mediaObserver:MediaObserver,private breakpointObserver: BreakpointObserver, private router: Router){}
  ngOnInit(){

    // Create a services to set var if device is mobile
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias)
      this.deviceXs = result.mqAlias === 'xs' ? true : false
    })
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe()
    
  }
}
