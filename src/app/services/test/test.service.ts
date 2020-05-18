import { Injectable } from '@angular/core'
import { MediaObserver,MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})

export class TestService {
  //Declare mediatype with type Subscription
  mediaSub: Subscription
  deviceXs: boolean
  constructor(public mediaObserver:MediaObserver,private breakpointObserver: BreakpointObserver){}
    ngOnInit(){

    // Create a services to set var if device is mobile
    this.mediaSub = this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      console.log(result.mqAlias)
      this.deviceXs = result.mqAlias === 'xs' ? true : false
    })
  }
  ngOnDestroy(){
    console.log('destroy')
    this.mediaSub.unsubscribe()
    
  }
}