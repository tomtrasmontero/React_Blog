// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav id="NavBar">
    <div className="nav-wrapper example">
      <a className="left brand-logo hide-on-small-only">
        Tom Learns Programming Blog
      </a>
      <ul className="right">
        <li>
          <Link to={'/'}>
            Home
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
