import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  @Input() data = "";
  @Output() sendData = new EventEmitter<string>();
  public val : any;
  constructor(
    private service : CommonServiceService
  ) {
    
  }

  ngOnInit(): void {
  }

  sendVal(name:any){
    this.service.sendName(name.value);
    this.sendData.emit(name.value);
  }

}
