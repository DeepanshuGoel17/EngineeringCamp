
   import {addTask} from './addtask.js';
   import {deletetask} from './deletetask.js';
  import {elete} from './elete.js';
  import {buttonDelete} from './buttondelete.js';
     import{isempty} from './empty.js';
   var b= document.querySelector('body');
   b.style.background= "#658ea2";
   b.style.alignContent ="center";
    var addButton = document.querySelector("#add_new_task");
  
    // addButton.style.background ="Green";
    // addButton.style.padding ='20px 40px';
    // addButton.style.aling ='centre';
    // addButton.style.color = 'White';
    // addButton.style.margin ="auto";
    addButton.addEventListener("click",addTask);

