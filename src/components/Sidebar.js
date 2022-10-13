import React from "react";
import {Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="aside">
      <div className="menu">
        <ul>
          <li>
            <Link to="/Intro"> Web Storage-Introduction</Link>
          </li>
          <li>
          <Link to="/Types">Types of Web Storage</Link>
          </li>
          <ol>
            <li>
            <Link to="/Types">The localStorage Object</Link>
            </li>
            <li>
            <Link to="/Types">The localStorage Object</Link>
            </li>
          </ol>
          <li>
          <Link to="/Delete">Delete Web Storage</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
