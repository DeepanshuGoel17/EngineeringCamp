import {date} from './getdate.js';
//  let text = localStorage.getItem("MyTaskData");
// let obj = JSON.parse(text);
// let id = obj.id;
// let detail =obj.detail;
//  let status=obj.status;
//  let dat=obj.date;
// let i=obj.id.length-1;
let id=[];
let detail =[];
let status=[];
let dat=[];
let i=0;
export var storeTask=(ele)=>{

if(detail.indexOf( ele.parentElement.parentElement.childNodes[4].childNodes[1].value.toLowerCase())<0 ){

id.push(`card${i}`);
i++;
detail.push(ele.parentElement.parentElement.childNodes[4].childNodes[1].value.toLowerCase());
dat.push(date());
if(ele.parentElement.childNodes[7].childNodes[1].checked == true){
status.push("Done");

}else if(ele.parentElement.childNodes[5].childNodes[1].checked== true){
status.push("In Progress");

}else{
    status.push("ToDo");
}


}else
{
    let index = detail.indexOf( ele.parentElement.parentElement.childNodes[4].childNodes[1].value);

// detail[index] =ele.parentElement.parentElement.childNodes[4].childNodes[1].value.toLowerCase();
dat[index] =date();
if(ele.parentElement.childNodes[7].childNodes[1].checked== true){
status[index] ="Done";
}else if(ele.parentElement.childNodes[5].childNodes[1].checked== true){
status[index] ="In Progress";

}else{
    status[index] = "ToDo";
}

}

 var myObj = { "id":id, "detail":detail, "status":status,"date":dat};
 var myJSON = JSON.stringify(myObj);
 
localStorage.setItem('MyTaskData',myJSON);


}