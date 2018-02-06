import {header} from '../header/header.js';
import {nav} from '../header/nav.js';
import{footer} from '../footer/footer.js';
import{todocard} from './ToDOCard.js';
import{addTask} from './addtask.js';
import{deleteTask} from './deletetask.js';
import{fetchData} from './fetchdata.js';
import{Search} from './search.js';
import{home} from './home.js'
import{filterTodo} from './filtertodo.js';
import{filterpro} from './filterpro.js';
import{filterdone} from './filterdone.js';
import{sdate} from './sortdate.js';
import{sstatus} from './sortstatus.js';
import{stask} from './sorttask.js';
 let h= document.querySelector("#nav");
 h.innerHTML=nav;
 let he =document.querySelector("#header");
 he.innerHTML= header;
 let fe=document.querySelector("#footer");
fe.innerHTML=footer;

let dd=document.querySelector("#addTask");
dd.addEventListener('click',addTask);

window.addEventListener('load',fetchData);
document.querySelector("#submit").addEventListener('click',Search);
document.querySelector("#home").addEventListener('click',home);
document.querySelector("#filtertodo").addEventListener('click',filterTodo);
document.querySelector("#filterdone").addEventListener('click',filterdone);
document.querySelector("#filterpro").addEventListener('click',filterpro);
document.querySelector("#sortdate").addEventListener('click',sdate);
document.querySelector("#sortstatus").addEventListener('click',sstatus);
document.querySelector("#sorttask").addEventListener('click',stask);