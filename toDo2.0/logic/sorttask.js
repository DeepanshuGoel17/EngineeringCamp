import {addsorttask} from './addsorttask.js';
export var stask=()=>{
    let det=[];
    let myNode = document.querySelector("#sort");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
        document.querySelector("#main").hidden = "hidden";
    document.querySelector("#sort").hidden="";
    document.querySelector("#sEarch").hidden="hidden";
let text = localStorage.getItem("MyTaskData");
let obj = JSON.parse(text);
let obj1 =JSON.parse(text);
if(obj.id.length == 0 ){}
else{
obj.detail.sort();

for(let i =0;i<obj.detail.length;i++){
    let index = obj1.detail.indexOf(obj.detail[i])
addsorttask(obj.id[index],obj.detail[i],obj.status[index]);
obj.id[index] = 0;
obj1.detail[index] = 0;
obj.date[index] = 0;
obj.status[index] =0;
}
}
}