import {
    addTaskSearch
} from './addtasksearch.js';
var Rx = require('rxjs/Rx');
var Observable = require('rxjs/Observable').Observable;
export var Search = () => {
    let myNode = document.querySelector("#sEarch");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    document.querySelector("#main").hidden = "hidden";
    document.querySelector('#sort').hidden ="hidden";
    document.querySelector("#sEarch").hidden="";
    let val = document.querySelector("#searchText").value.toString();
    console.log(val);
    let text = localStorage.getItem("MyTaskData");

    let obj = JSON.parse(text);
    let det = obj.detail;

    Rx.Observable.from(det)
        .filter((det) => {
            console.log(det);
            return det.indexOf(val) >= 0;
        })
        .subscribe((det) => {
            addTaskSearch(obj, det);
        });

}