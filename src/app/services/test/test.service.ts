import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})

export class TestService {

constructor() {}

getSomething(){
  return "a value"
}
  
}