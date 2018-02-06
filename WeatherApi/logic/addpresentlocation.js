import {
    addDetails1
} from './adddetailspre.js';
import {
    error
} from './error.js';
var Rx = require('rxjs/Rx');
var Observable = require('rxjs/Observable').Observable;
export var addpresent = () => {
    let city = 'Bhubaneshwar';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=Bhubaneshwar&appid=61431a8e02ffe7c44a674fc6174d0585&units=metric`;
    Rx.Observable.fromPromise(fetch(url))
        .subscribe((response) => {
            response.json()
                .then((my) => {
                    addDetails1(my, city);
                })
                .catch(err => {
                    error(city)
                });

        });


}