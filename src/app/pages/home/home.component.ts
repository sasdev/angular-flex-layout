import { Component, OnInit, Input } from '@angular/core'
import { DetectMobileService} from '../../services/detectmobile/detectmobile.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css']
})

export class HomeComponent{
 
  constructor(private _detectmobile: DetectMobileService) {}
  ngOnInit(){
    this.testvalue = this._detectmobile.getSomething()
  }
}