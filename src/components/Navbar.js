import React from "react";
import {Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-menu">
      <div className="menu">
        <ul>
          <li>
            <Link to="/home"> Home</Link>
          </li>
          <li>
             <Link to="/about"> About</Link>
          </li>
          <li>
              <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
             <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
