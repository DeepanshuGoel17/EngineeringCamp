
function UniqueSum(){
    var sum=0;
var arr = [2,2,4,5];
var arr1 =[0,0,0,0];
for(var i=0;i<arr.length;i++){
if(arr1.indexOf(arr[i])>=0){

arr[i] +=1;
i=i-1;

}
else{

    arr1[i] =arr[i];
sum= sum+arr1[i];
}




}

console.log(sum);











}
UniqueSum();