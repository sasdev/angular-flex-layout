import { Component, OnInit, OnDestroy } from '@angular/core'
import { MediaObserver,MediaChange } from '@angular/flex-layout'
import { Subscription } from 'rxjs'

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

  constructor(public mediaObserver:MediaObserver){}
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
