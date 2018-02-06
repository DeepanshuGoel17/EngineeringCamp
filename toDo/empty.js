export var isempty=()=> {
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