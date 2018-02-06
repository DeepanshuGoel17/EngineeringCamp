
export var todocard =`
<div class="card card-inverse card-success text-center";>
  <div class="card-header">**********NEW TASK***********
  </div>
  <div class="card-block">
    <h4 class="card-title">Description:::</h4>
    <p class="card-text"> <div class="form-group">
    <textarea class="form-control" id="exampleTextarea" rows="3" placeholder ="Enter the Task Description....."></textarea>
  </div></p>
  
  <form id= "formcard">
  <a href="#" class="btn btn-info" id ="store">Store Task</a>
    <label class="custom-control custom-radio">
  <input id="radio1" name="radio" type="radio" class="custom-control-input" checked>
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">TODO</span>
</label>
<label class="custom-control custom-radio">
  <input id="radio2" name="radio" type="radio" class="custom-control-input">
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">IN Progress</span>
</label>

<label class="custom-control custom-radio">
  <input id="radio2" name="radio" type="radio" class="custom-control-input">
  <span class="custom-control-indicator"></span>
  <span class="custom-control-description">Done</span>
</label>

    <a href="#" class="btn btn-warning" id ="delete">DeLeTe</a>
    </form>
  </div>
</div>
<br>

`;