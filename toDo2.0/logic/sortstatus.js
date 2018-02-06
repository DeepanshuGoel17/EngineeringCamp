import {addsorttask} from './addsorttask.js';
export var sstatus=()=>{
    let myNode = document.querySelector("#sort");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
        document.querySelector("#main").hidden = "hidden";
    document.querySelector("#sort").hidden="";
    document.querySelector("#sEarch").hidden="hidden";
let text = localStorage.getItem("MyTaskData");
let obj = JSON.parse(text);
let obj1=JSON.parse(text);
if(obj.id.length == 0 ){}
else{
    obj.status.sort();

    for(let i =0;i<obj.status.length;i++){
        let index = obj1.status.indexOf(obj.status[i]);
        addsorttask(obj.id[index],obj.detail[index],obj.status[i]);
        obj.id[index] = 0;
        obj.detail[index] = 0;
        obj.date[index] = 0;
        obj1.status[index]=0;
        }
    }
}