import { Component, OnInit, Input } from '@angular/core'
// import { TestService } from '../../services/test/test.service'


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css']
})

export class HomeComponent{
 
  constructor() {}
  ngOnInit(){
    // this.testvalue = this._service.getSomething()
  }
}