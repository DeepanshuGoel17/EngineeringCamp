import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent implements OnInit {

abc:string='';
objBike : any ={
  company :"",
model:"",
color :"",
number:""
}
  constructor() { 
  }

  ngOnInit() {
  }
  @Output() notify : EventEmitter<any> = new EventEmitter<any>();
   
   store():void {this.notify.emit(this.objBike)};

}
