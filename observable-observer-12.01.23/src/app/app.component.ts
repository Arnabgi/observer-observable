import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = "Har Har Mahadev";
  val : any;
  title = 'observable-observer-12.01.23';
  constructor() {
  }

  ngOnInit(): void {
  }

  getData(event:string){
    this.val = event
  }
}
