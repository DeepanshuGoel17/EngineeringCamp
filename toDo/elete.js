
    export var elete=()=> {
        var don2 = document.querySelectorAll('#pro1');
        var del2 = document.querySelectorAll('h1')
        for (var i = 0; i < don2.length; i++) {
            if (don2[i].checked) {
                del2[i].style.color = "Green";

            }
        }
        

    }

