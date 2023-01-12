import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  public val : any;
  constructor(
    private service : CommonServiceService
  ) { }

  ngOnInit(): void {
    this.getValue();
  }

  getValue(){
    this.service.getName().subscribe((value) => {
      this.val = value;
    })
  }

}
