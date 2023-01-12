import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  public val: any;
  constructor(
    private service : CommonServiceService
  ) { 
    this.service.getName().subscribe((value) => {
      this.val = value;
    })
  }

  ngOnInit(): void {
  }

}
