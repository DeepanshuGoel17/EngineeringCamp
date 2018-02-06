var Rx = require('rxjs/Rx');
var Observable = require('rxjs/Observable').Observable;
document.querySelector("p").style.marginLeft=650+'px';
document.querySelector("p").style.marginTop=400+'px';
 
Rx.Observable.fromEvent(window,'keydown')
  .filter(KeyboardEvent => KeyboardEvent.keyCode ==37)
  .subscribe(()=>{
      
     document.querySelector("p").style.marginLeft = (parseInt(document.querySelector("p").style.marginLeft)) - 10 + "px";
  }
  );
  Rx.Observable.fromEvent(window,'keydown')
  .filter(KeyboardEvent => KeyboardEvent.keyCode ==38)
  .subscribe(()=>{
      
     document.querySelector("p").style.marginTop = (parseInt(document.querySelector("p").style.marginTop)) - 10 + "px";
  }
  );
  Rx.Observable.fromEvent(window,'keydown')
  .filter(KeyboardEvent => KeyboardEvent.keyCode ==40)
  .subscribe(()=>{
      
     document.querySelector("p").style.marginTop = (parseInt(document.querySelector("p").style.marginTop)) + 10 + "px";
  }
  );
  Rx.Observable.fromEvent(window,'keydown')
  .filter(KeyboardEvent => KeyboardEvent.keyCode ==39)
  .subscribe(()=>{
  document.querySelector("p").style.marginLeft = (parseInt(document.querySelector("p").style.marginLeft)) + 10 + "px";
  }
  );