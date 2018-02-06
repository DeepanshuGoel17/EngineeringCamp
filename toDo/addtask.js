import {deletetask} from './deletetask.js';
import {elete} from './elete.js';
import {buttonDelete} from './buttondelete.js';
import {dlal} from './dlall.js';
export var addTask=()=> {
        var task = prompt("Enter the Task to do:::");
      console.log(task.length);
        if ((!task.isempty) && task.length > 0) {
            var dd = document.querySelector('div');

            dd.hidden = "";
       document.querySelector("#tak").hidden ="";

            var ishu = document.querySelector('#delAll');
            ishu.hidden = "";
            ishu.addEventListener("click",dlal);
            var st1 = document.querySelector('#kon');
            
            var st =document.createElement('div');

            st.className ="col-sm-4";
            var st2 =document.createElement('div');
            st2.className = "card card-inverse card-success mb-3 text-center";
            var fom = document.createElement('p');
            fom.className ="card-block";
            fom.innerHTML = `
            <form><h1 style ='color:red'  class="card-title"> ${task}  </h1><br>
            <div class="card-text">
            <input type ='radio' value='todo' name ='group1' checked>ToDO<br>
             <input type ='radio' id='pro1' name ='group1' value='inprogress'>In Progress<br>
             <input type ='radio' value='done' name ='group1' id ='don1'>Done</div>
           </form><br><button id = 'delet' hidden = 'hidden' class="btn btn-danger" >Delete This Task</button>`;
       st1.appendChild(st);
        st.appendChild(st2);
        st2.appendChild(fom);
            dd.appendChild(st1);
                 var pr = document.querySelectorAll('#pro1');
                 for(let i=0;i<pr.length;i++){
                 pr[i].addEventListener('click',function(){
    elete()}, false);}
    
                 let d =document.querySelectorAll("#don1");
                for(let i=0;i<pr.length;i++){
                 d[i].addEventListener('click',function(){
    buttonDelete()}, false);}
                 let dl = document.querySelectorAll('#delet');
                   for(let i=0;i<pr.length;i++){
                 dl[i].addEventListener('click',function(){
    deletetask(dl[i])}, false);
                   }

        } else {
            alert("Please Enter the Correct");
        }
    }