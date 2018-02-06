var siz=4;
var x=[[2,3,603],[1,1,286],[4,4,882]];
function listmax(){
    var arr=[0,0,0,0];
    
    for(var i =0;i<3;i++){
        
    arr[x[i][0]-1] += x[i][2];
arr[x[i][1]]-=x[i][2];

    }
    var max=0;
      var max1=0;
    for(var k=0;k<4;k++){
       // console.log(arr[k]);

   max1 += arr[k];
if(max<=max1){
    max=max1;
}



    }
console.log(max);






}


listmax();