import {date} from'./getdate.js';
import{to2} from './errorCard.js';
 export var addDetails1=(data,city)=>{
let body =document.querySelector('#main1');
let toy = date();
 let pp=`Weather:${data.weather[0].main}
Description:${data.weather[0].description}
Temp:${data.main.temp} °C
Pressure:${data.main.pressure}
humidity:${data.main.humidity}
Min temp:${data.main.temp_min} °C
Max Temp:${data.main.temp_max} °C`;
 let to=document.createElement("div");
 to.className ="col-sm-6";
  to.innerHTML =`
<div class= "card card-inverse card-success text-center">
  <div class="card-block">
    <h4 class="card-title">Weather Details of ${city} at Date ${toy} is:: </h4>
    <p class="card-text"> <div class="form-group">
    <textarea class="form-control" style=" height: 160px;">${pp}</textarea></p>
  </div>
  </div>
  </div>
  <br>
`;
body.appendChild(to);
 let to1=document.createElement("div");
 to1.className ="col-sm-6";
to1.innerHTML= to2;
to1.hidden ="hidden";
to1.id ="error";
body.appendChild(to1);
}
