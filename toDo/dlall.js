
  import{isempty} from './empty.js';
    export var dlal=()=> {
        var don = document.querySelectorAll('#don1');
        var del = document.querySelectorAll('p');
        for (var i = 0; i < don.length; i++) {
            if (don[i].checked) {
                del[i].hidden = "hidden";
            }
        }
        isempty();
    }
