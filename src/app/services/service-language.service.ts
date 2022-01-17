import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceLanguageService {
  counter= true;
  changeLanguage: BehaviorSubject<boolean>; 

  constructor() { 
    this.changeLanguage= new BehaviorSubject(this.counter);
  }

  changeToEnglish(){
    if(!this.counter){
      this.counter = !this.counter;
      this.changeLanguage.next(this.counter);
    }
  }
  changeToFrench(){
    if(this.counter){
      this.counter = !this.counter;
      this.changeLanguage.next(this.counter);
    }
  }
}
