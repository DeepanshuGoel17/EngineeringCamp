 export var buttonDelete=()=> {
        var don = document.querySelectorAll('#don1');
        var del = document.querySelectorAll('#delet');
        var h = document.querySelectorAll('h1');
      //  ele.parentElement.childNode[]
        for (var i = 0; i < don.length; i++) {
            if (don[i].checked) {
                del[i].hidden = "";
                h[i].style.color = "Blue";

            }
        }
    }
