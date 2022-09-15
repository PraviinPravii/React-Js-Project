import React from "react";
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LB Closer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Frond End Languages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      HTML5
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CSS
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="#">
                      JAVA SCRIPT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      REACT JS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      NEXT SCRIPT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      NODE JS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Backend Languages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Python
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      C++
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="#">
                      Java
                    </a>
                  </li>
                </ul>
              </li>
              
              
            </ul>
            
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggle_mode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode==='light'?'Enable Dark mode':'Enable Light mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
