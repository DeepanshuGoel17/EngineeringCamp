    import{isempty} from './empty.js';
  export var deletetask=(ele)=> {
        ele.parentElement.hidden = 'hidden';
         ele.parentElement.parentElement.hidden = 'hidden';
          ele.parentElement.parentElement.parentElement.hidden = 'hidden';

        isempty();
    }
