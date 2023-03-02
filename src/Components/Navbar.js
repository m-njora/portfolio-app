import React from 'react';
import { Link } from 'react-router-dom';
// import '../css/navbar.css';

function Navbar() {
  return (
    <header className='header'>
    <nav className='navigation'>
      <h2>Logo</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <button className='btnlogin-popup'>
          <Link to="/login">Login</Link>

        </button>
        </li>
      </ul>
    </nav>
    </header>
 
  );
}

export default Navbar;
