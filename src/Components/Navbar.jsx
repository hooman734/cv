import React from "react";


const Navbar = function() {
  return (
    
      <div style={{width: "3rem"}} className="btn-group btn-group-toggle btn-lg" role="group" aria-label="Basic example">
          <a
            className="btn btn-secondary navbar-brand text-white"
            href="http://hooman734.github.io"
          >
            <i className="fa fa-home" /> Home
          </a>
          <div className="btn-group  dropright">
            <button type="button" id="dropdownMenu" className="btn btn-lg btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Fields
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
            </div>
      </div>
      
   
  );
};

export default Navbar;
