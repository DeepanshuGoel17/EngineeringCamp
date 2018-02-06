import {fetchData} from './fetchdata.js';
export var home=()=>{
document.querySelector("#main").hidden="";
 document.querySelector("#sEarch").hidden ="hidden";
    document.querySelector("#sort").hidden="hidden";
fetchData();

}