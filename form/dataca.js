import {Car} from './car.js';

export var dataCar=()=> {
    let na = document.querySelector('#carName').value;
    let mo = document.querySelector('#carModel').value;
    let co = document.querySelector('#carColor').value;
    let num = document.querySelector('#carNumber').value;
    var car1 = new Car(na, mo, co, num);
    var di = document.querySelector('#adddetail');
    di.innerHTML += car1.getInfo() + '<br>';

}