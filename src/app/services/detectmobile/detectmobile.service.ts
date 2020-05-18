import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})

export class DetectMobileService {

  constructor() {}

  getSomething(){
    return "This is a value from the service"
  }
  
}