// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./searchnav.css";
// const Searchnav = () => {
//   return (
//     <div>
//       <div className="container container-search">
//         <div class="input-group mb-3 search-box">
//           <button
//             class="btn btn-outline-secondry dropdown-toggle"
//             type="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Dropdown
//           </button>
//           <ul class="dropdown-menu">
//             <li>
//               <a class="dropdown-item" href="#">
//                 Action
//               </a>
//             </li>
//             <li>
//               <a class="dropdown-item" href="#">
//                 Another action
//               </a>
//             </li>
//             <li>
//               <a class="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </li>

//             <li>
//               <a class="dropdown-item" href="#">
//                 Separated link
//               </a>
//             </li>
//           </ul>
//           <input
//             type="text"
//             className="form-control shadow-none"
//             aria-label="Text input with dropdown button"
//           />
//         </div>
//         <div>
//           {/* second dropdown */}
//         <div class="dropdown">
//   <a className="btn  dropdown-toggle dropdown-second" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

//    Dropdown link
//   </a>

//   <ul class="dropdown-menu">
//     <li><a class="dropdown-item" href="#">Action</a></li>
//     <li><a class="dropdown-item" href="#">Another action</a></li>
//     <li><a class="dropdown-item" href="#">Something else here</a></li>
//   </ul>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Searchnav;

// import React from 'react'
// import "./searchnav.css"

// function Searchnav() {
//   return (
//     <div className='d-flex'>

// <select class="dropdown" id="alphalist" >
//      <option value="a">A</option>
//      <option value="b">B</option>
//      <option value="c">C</option>
//    </select> <br/> <br/>

//    <div class="search_bar">
//      <input class="search_nav" type="text" placeholder="Search..."/>
//      <span class="fa fa-search"></span>
//    </div>

//     </div>
//   )
// }

// export default Searchnav

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import './searchnav.css'
import searchicon from '../../assets/logo/search-24px.svg'

const Searchnav = () => {
  return (
    <div style={{ marginTop: '30px', marginRight: '25px' }}>
      <div className="container container-search">
        {/* Dropdown with label */}
        <div className="dropdown">
          <button
            style={{
              borderRadius: '10px 0px 0px 10px',
              paddingLeft: '25px',
              paddingBottom: '13px',
              paddingTop: '12px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #C9C9C9 ',
              color: '#262626',
            }}
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All Courses
          </button>
          <ul
            className="dropdown-menu  dropdownMenuStyle"
            aria-labelledby="dropdown"
          >
            <li>
              <span className="dropdown-item" style={{color:" #999999", fontSize:"14px", fontFamily:"Open Sans"}}>
                Catagories
              </span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Data Science
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Business
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Computer Science
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Information Technology
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Health
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Personal Development
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Social Science
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Arts
              </a>
            </li>
          </ul>
        </div>

        <div className="search-box  searchBoxMainStyle">
          <input
            type="text"
            className="form-control shadow-none  searchBoxStyle"
            aria-label="Text input with dropdown button"
            placeholder="Search our Courses"
          />
          <span>
            <img className=" logoSearchStyle" src={searchicon} alt="icon" />
          </span>
        </div>

        <div className="dropdown">
          <button
            style={{
              borderRadius: '10px 10px',
              paddingLeft: '25px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #C9C9C9 ',
              fontFamily: 'Open Sans',
              marginLeft: '16px',
              color: '#262626',
            }}
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div
              style={{
                fontFamily: 'Opens Sans',
                fontSize: '10px',
                color: '#262626',
                textAlign: 'start',
                opacity: '0.5',
              }}
            >
              Sort By
            </div>
            Most Recent
          </button>
          <ul
            className="dropdown-menu  dropdownMenuStyle2"
            aria-labelledby="dropdown"
          >
            <li>
              <a className="dropdown-item" href="#">
                Most Recent
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Most Popular
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Searchnav
