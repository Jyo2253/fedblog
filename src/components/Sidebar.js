import React from 'react'

const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="menu">
        <ul>
          <li>
            <a href="#home">Web Storage-Introduction</a>
          </li>
          <li><a href="#about">Types of Web Storage</a> </li>
          <ol>
            <li><a href="#about">The localStorage Object</a></li>
            <li><a href="#about">The localStorage Object</a></li>
            </ol>
          <li>
            <a href="#clients">Delete Web Storage</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar