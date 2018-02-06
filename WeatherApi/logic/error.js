let pp;
let i =0;
export var error=(city)=>{

pp=`Error City: "${city}" Not found anywhere please enter the differnt name\r`;
document.querySelector("#error").hidden = "" ;
document.querySelector("#err").value = pp ;

i++;


}