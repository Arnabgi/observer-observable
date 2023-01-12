import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private obj = new BehaviorSubject<string | null>(null);
  private val = this.obj.asObservable();
  constructor() { }

  sendName(value:string){
    this.obj.next(value);
  }

  getName(){
    // console.log("value........",this.val);
    return this.val;
  }
}
