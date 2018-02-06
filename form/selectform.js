import {Bike} from './bike.js';
import {Car} from './car.js';
import {dataCar} from './dataca.js';
import {dataBike} from './databi.js';
 var sform=()=> {

  let strUser = sel.options[sel.selectedIndex].value;
    let ca = document.querySelector('#car');
    console.log(strUser);
    let bk = document.querySelector('#bike');
    if (strUser == "car") {

        ca.hidden = "";
        bk.hidden = "hidden";
    }
    else if (strUser == "bike") {

        bk.hidden = "";
        ca.hidden = "hidden";

    }
    else{
bk.hidden="hidden";
ca.hidden="hidden";

    }
}

let sel = document.querySelector('select');
    sel.addEventListener("change",sform);
    let bii = document.querySelector("#sub");
bii.addEventListener('click',dataCar);
let bii1 = document.querySelector("#sub1");
bii1.addEventListener('click',dataBike);
  