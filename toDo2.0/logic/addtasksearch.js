import {
    todocard
} from './ToDOCard.js';

export var addTaskSearch = (obj, det) => {
    let index = obj.detail.indexOf(det);
    let ne = document.createElement('div');
    ne.innerHTML = todocard;
    ne.className = "col-sm-5"
    document.querySelector("#sEarch").appendChild(ne);


    let dd = document.querySelector("#sEarch").hidden = "";

    ne.id = obj.id[index];

    ne.childNodes[1].childNodes[3].childNodes[4].childNodes[1].value = det;
    if (obj.status[index] == "In Progress") {
        ne.childNodes[1].childNodes[3].childNodes[7].childNodes[5].childNodes[1].checked = true;

    } else if (obj.status[index] == "Done") {
        ne.childNodes[1].childNodes[3].childNodes[7].childNodes[7].childNodes[1].checked = true;

    }
}