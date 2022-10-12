import React from "react";
import { Link } from "react-router";
const Sidebar = () => {
  return (
    <div className="aside">
      <div className="menu">
        <ul>
          <li>
            <Link to="./Intro.js">Web Storage-Introduction</Link>
          </li>
          <li>
            <a href="#about">Types of Web Storage</a>{" "}
          </li>
          <ol>
            <li>
              <a href="#about">The localStorage Object</a>
            </li>
            <li>
              <a href="#about">The localStorage Object</a>
            </li>
          </ol>
          <li>
            <a href="#clients">Delete Web Storage</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
