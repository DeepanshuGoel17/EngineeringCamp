   var b= document.querySelector('body');
   b.style.background= "#658ea2";
   b.style.alignContent ="center";
    var addButton = document.querySelector("#add_new_task");
    addButton.textContent = 'Click To add Task';
    addButton.style.background ="Green";
    addButton.style.padding ='20px 40px';
    addButton.style.aling ='centre';
    addButton.style.color = 'White';
    addButton.style.margin ="auto";
    addButton.addEventListener("click",addTask);

    function addTask() {
        var task = prompt("Enter the Task to do:::");
      console.log(task.length);
        if ((!task.isempty) && task.length > 0) {
            var dd = document.querySelector('div');
            dd.hidden = "";
        
            var ishu = document.querySelector('#delAll');
            ishu.hidden = "";
            ishu.addEventListener("click",dlal);
            var fom = document.createElement('p');
            fom.innerHTML = "<h1 style =\'color:red\'>" + task + "</h1>" + "<form><br><input type =\'radio\' value='todo' name =\'group1\' checked>ToDO<br> <input type =\'radio\' id=\'pro1\' name =\'group1\' onclick=\'elete()\' value='inprogress'>In Progress<br><input type =\'radio\' value='done' name =\'group1\' id =\'don1\' onclick =\'buttonDelete()\'>Done" +
                "</form><br><button id = \'delet\' hidden = \'hidden\'onclick=\"deletetask(this)\" >Delete</button>";
            dd.appendChild(fom);

        } else {
            alert("Please Enter the Correct");
        }
    }

    function buttonDelete() {
        var don = document.querySelectorAll('#don1');
        var del = document.querySelectorAll('#delet');
        var h = document.querySelectorAll('h1');
        for (var i = 0; i < don.length; i++) {
            if (don[i].checked) {
                del[i].hidden = "";
                h[i].style.color = "Blue";

            }
        }
    }

    function deletetask(ele) {
        ele.parentElement.hidden = 'hidden';

        isempty();
    }

    function elete() {
        var don2 = document.querySelectorAll('#pro1');
        var del2 = document.querySelectorAll('h1')
        for (var i = 0; i < don2.length; i++) {
            if (don2[i].checked) {
                del2[i].style.color = "Green";

            }
        }
    }

    function dlal() {
        var don = document.querySelectorAll('#don1');
        var del = document.querySelectorAll('p');
        for (var i = 0; i < don.length; i++) {
            if (don[i].checked) {
                del[i].hidden = "hidden";
            }
        }
        isempty();
    }

    function isempty() {
        var del = document.querySelectorAll('p');
        var counter = 0;
        for (var i = 0; i < del.length; i++) {
            if (del[i].hidden == "") {
                counter = 1;
            }
        }
        if (counter == 0) {
            var dd = document.querySelector('div');
            dd.hidden = "hidden";
            var ishu = document.querySelector('#delAll');
            ishu.hidden = "hidden";

        }



    }