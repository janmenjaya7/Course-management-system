import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./searchnav.css";
const Searchnav = () => {
  return (
    <div>
      <div className="container container-search">
        <div class="input-group mb-3 search-box">
          <button
            class="btn btn-outline-secondry dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            {/* <li><hr class="dropdown-divider"></li> */}
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
          <input
            type="text"
            className="form-control shadow-none"
            aria-label="Text input with dropdown button"
          />
        </div>
        <div>
          {/* second dropdown */}
        <div class="dropdown">
  <a className="btn  dropdown-toggle dropdown-second" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    
   Dropdown link
  </a>
  
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
      </div>
    </div>
  );
};

export default Searchnav;
