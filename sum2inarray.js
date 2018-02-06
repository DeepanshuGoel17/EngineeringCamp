function sum(){
var ss = 12;
var arr=[6,6,3,9,3,5,1];
var count =0;
var arr1=[];
var arr2=[];
var j=0;
var k=0;
for(var i =0;i<arr.length;i++){
if(arr1.indexOf(arr[i])>=0){
if(arr2.indexOf(arr[i])<0){
    arr2[j]= arr[i];
    j++;
}
}
else{

    arr1[k]=arr[i];
    k++;
}
}
for(var h=0; h<arr1.length;h++){
for(var g=h+1;g<arr1.length;g++){
var ne = arr1[g]+arr1[h];
if(ne===ss){
   
    count++;
}

}
if(h<arr2.length){
var nw = arr2[h]+arr2[h];
if(nw===ss){
    count++;
}

}

}
console.log(count);
}
sum();