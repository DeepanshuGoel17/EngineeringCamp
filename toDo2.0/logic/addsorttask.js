import{todocard} from './ToDOCard.js';
export var addsorttask=(id,detail,status)=>{
    let ne = document.createElement('div');
    ne.innerHTML = todocard;
    ne.className = "col-sm-5"
    document.querySelector("#sort").appendChild(ne);


    let dd = document.querySelector("#sort").hidden = "";

    ne.id = id;

    ne.childNodes[1].childNodes[3].childNodes[4].childNodes[1].value = detail;
    if (status == "In Progress") {
        ne.childNodes[1].childNodes[3].childNodes[7].childNodes[5].childNodes[1].checked = true;

    } else if (status == "Done") {
        ne.childNodes[1].childNodes[3].childNodes[7].childNodes[7].childNodes[1].checked = true;

    }



}