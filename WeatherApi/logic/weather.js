import {
    addDetails
} from './adddetails.js';
import {
    error
} from './error.js';
import {addpresent} from './addpresentlocation.js';
var Rx = require('rxjs/Rx');
var Observable = require('rxjs/Observable').Observable;
addpresent();
let input = document.querySelector('input');
  let city;
  let cityname=[];
Rx.Observable.fromEvent(input, 'input')
    .map(event => event.target.value)
    .debounceTime(1500)
    .distinctUntilChanged()
    .filter((name) =>{ 
        city = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
        
         return cityname.indexOf(city)<0; })
    .subscribe((name) => {
 city = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
      cityname.push(city);
       
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61431a8e02ffe7c44a674fc6174d0585&units=metric`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((my) => {
                addDetails(my, city);
            })
            .catch(err => {
                //console.log(err);
                error(city)
            });
    });
    