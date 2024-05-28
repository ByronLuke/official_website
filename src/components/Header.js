import React from 'react';

function Header() {
  return (
    <div className="row text-center">
    <div className= "col-11">
      <h1>My Portfolio</h1>
            <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    </div>
  );
}

export default Header;