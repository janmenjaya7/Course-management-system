import React from "react";
import "./BootstrapDrop.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const BootstrapDrop = () => {
  return (
    <div>
      <div className="dropdown">
        <button
          className="dropdown-toggle drop-section "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select time duration (in days)
        </button>
        <ul className="dropdown-menu">
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
        </ul>
      </div>
    </div>
  );
};

export default BootstrapDrop;
