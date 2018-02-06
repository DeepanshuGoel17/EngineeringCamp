var Rx = require('rxjs/Rx');
var Observable = require('rxjs/Observable').Observable
let input =document.querySelector('input');
    Rx.Observable.fromEvent(input, 'input')
        .map(event => event.target.value)
        .subscribe((name)=>{
          console.log(name);


        });