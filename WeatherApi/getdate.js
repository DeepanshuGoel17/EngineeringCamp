export var date=()=>{

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
let  hour = today.getHours(); // => 9
 let min =today.getMinutes(); // =>  30
let sec =today.getSeconds(); 

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy +" Time :" + hour+" : "+min+" : "+sec;


return today;


}
