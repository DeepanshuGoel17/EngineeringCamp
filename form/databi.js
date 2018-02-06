
import {Bike} from './bike.js';

export var dataBike=()=> {
    let na = document.querySelector('#bName').value;
    let mo = document.querySelector('#bmodel').value;
    let co = document.querySelector('#bcolor').value;
    let num = document.querySelector('#bnumber').value;
    var bk1 = new Bike(na, mo, co, num);
    var di = document.querySelector('#adddetail');
    di.innerHTML += bk1.getInfo() + '<br>';




}