import { Component, OnInit, Input } from '@angular/core'
import { TestService } from '../../services/test/test.service'
import { DetectMobileService} from '../../services/detectmobile/detectmobile.service'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css']
})

export class HomeComponent{
 
  constructor(public _service: TestService) {}
  ngOnInit(){
    this.testvalue = this._service.getSomething()
  }
}