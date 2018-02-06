export var filterTodo=()=>{
    document.querySelector("#main").hidden="";
    document.querySelector('#sort').hidden ="hidden";
    document.querySelector("#sEarch").hidden="hidden";
    console.log("hi inhere");
let main =document.querySelector('#taskarea');
for(let i = 0;i<main.childNodes.length;i++){
if(main.childNodes[i].childNodes[1].childNodes[3].childNodes[7].childNodes[3].childNodes[1].checked ==false){
main.childNodes[i].hidden ="hidden";

}
else{
    main.childNodes[i].hidden="";
}
}
}