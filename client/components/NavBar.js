// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav id="NavBar">
    <div className="nav-wrapper">
      <a className="left brand-logo hide-on-small-only" >
      Logo Here
      </a>
      <ul className="right">
        <li>
          <Link to={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            Github
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
