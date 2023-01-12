import { Component, Input, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';
@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  @Input() data = "";
  public val : any;
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
