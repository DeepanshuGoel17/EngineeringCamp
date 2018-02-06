import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

objCar:any ={
company :"",
model:"",
color :"",
number:""
}
 @Output() notify : EventEmitter<any> = new EventEmitter<any>();

store():void {this.notify.emit(this.objCar)};

}
