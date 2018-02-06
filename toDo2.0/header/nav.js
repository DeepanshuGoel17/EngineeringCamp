export var nav =`
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navigation bar</a>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="btn btn-info" id ="home">Home <span class="sr-only">(current)</span></a>
          </li>
        
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"  id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SORT THE TASK</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#" id="sortdate">DATE</a>
              <a class="dropdown-item" href="#" id ="sortstatus">STATUS</a>
              <a class="dropdown-item" href="#" id ="sorttask">TASK</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"  id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter THE TASK</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#" id="filtertodo">ToDO</a>
              <a class="dropdown-item" href="#" id ="filterpro">In Progress</a>
              <a class="dropdown-item" href="#" id ="filterdone">Done</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="search" id ="searchText">
          <a class="btn btn-outline-success my-2 my-sm-0" id ="submit">Search</a>
        </form>
      </div>
    </nav>
`;