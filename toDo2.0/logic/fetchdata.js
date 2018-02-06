import{addTask} from './addtask.js';
export var fetchData=()=>{
let text = localStorage.getItem("MyTaskData");
let obj = JSON.parse(text);
if(obj.id.length == 0 ){


}else{
    for(let i=0;i<obj.id.length ;i++){
 addTask();
let dd=document.querySelector("#taskarea");
dd.childNodes[i].id =obj.id[i];

dd.childNodes[i].childNodes[1].childNodes[3].childNodes[4].childNodes[1].value =obj.detail[i];
if(obj.status[i] == "In Progress"){
document.querySelector(`#${obj.id[i]}`).childNodes[1].childNodes[3].childNodes[7].childNodes[5].childNodes[1].checked=true;

}else if (obj.status[i] == "Done"){
document.querySelector(`#${obj.id[i]}`).childNodes[1].childNodes[3].childNodes[7].childNodes[7].childNodes[1].checked=true;

}

    }

}



}