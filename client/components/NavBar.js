// import React, { Component } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="example">
    <Link to={'/'}>
      <h1>TomLearnsProgramming Blog</h1>
    </Link>
    <img alt="misc background pic" />
    <div>insert Link for Home,About,Github,LinkedIn</div>
    <button>Login</button>
  </header>
);

export default Navbar;
