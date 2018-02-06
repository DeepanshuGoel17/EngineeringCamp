var arrr=[2,3,10,2,4,8,1];
function maxdif(arr){

var max=0;
var min=arr[0];
var indmax=0;
var indmin=0;
var max1=0;
for(var i=0;i<arr.length;i++){
if(max<arr[i]){
max= arr[i];
indmax= i;
}
if(min>arr[i]){
    min = arr[i];
    indmin =i;
}

}
var min2=arr[0];
if(indmax>indmin){
var ans = max-min;
//console.log("hi ans:"+ans);
return ans;

}
else{
for(var k=0;k<indmax;k++){
if(min2>arr[k]){
min2 =arr[k];
}
}
var ans1 = max-min2;

var ans2=0;
if(arr.length>1){
ans2=Math.max(ans1,maxdif(arr.slice(indmax+1,-1)));


}
else{
    ans1= Math.max(ans1,ans2);
    console.log("in this"+ans1);
}

console.log(ans1);

}


}
maxdif(arrr);