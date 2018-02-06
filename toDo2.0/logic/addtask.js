import {todocard} from './ToDOCard.js';
import {deletetask} from './deletetask.js';
import {storeTask} from './storeData.js';
let iid = 0;
export var addTask = () => {
    let ne = document.createElement('div');
    ne.innerHTML = todocard;
    ne.className = "col-sm-5"
    ne.id = `card${iid}`;
    iid++;
    let dd = document.querySelector("#taskarea");
    dd.appendChild(ne);
    let del = document.querySelectorAll("#delete");
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', function () {
            deletetask(del[i]);

        }, false);
    }
    let ss = document.querySelectorAll('#store')

    for (let i = 0; i < ss.length; i++) {
        ss[i].addEventListener('click', function () {
            storeTask(ss[i]);

        }, false);
    }

}