import {addsorttask} from './addsorttask.js';
export var sdate=()=>{
    let dat=[];
    let myNode = document.querySelector("#sort");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    document.querySelector("#main").hidden = "hidden";
    document.querySelector("#sort").hidden="";
    document.querySelector("#sEarch").hidden="hidden";
let text = localStorage.getItem("MyTaskData");
let obj = JSON.parse(text);
dat=obj.date;
if(obj.id.length == 0 ){}
else{
obj.date.sort();


for(let i =0;i<obj.date.length;i++){
 let index = dat.indexOf(obj.date[i]);
  console.log(obj.date);
addsorttask(obj.id[index],obj.detail[index],obj.status[index]);
obj.id[index] = 0;
obj.detail[index] = 0;
dat[index] = 0;
obj.status[index] =0;
}
}
}