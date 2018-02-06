import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SELECT FORM!';
  selectValue = "";
  flag = "";
  storeInfo: any;
  displayInfo(person: any) {
    console.log(person);
    this.storeInfo = person;
    this.flag = "1";
  }

}
