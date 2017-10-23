import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();

    $(document).ready(() => {
      $('.button-collapse').sideNav();
    });
  }

  closeNav() {
    $('.button-collapse').sideNav('hide');
  }

  render() {
    return (
      <nav id="NavBar" className="row">
        <div className="nav-wrapper">
          <a href="" data-activates="mobile-nav" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="hide-on-med-and-down">
            <li className="col s3">
              <Link to={'/'}>
              Home
              </Link>
            </li>
            <li className="col s3">
              <a
                href="http://tomtrasmontero.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
            <li className="col s3">
              <a
                href="https://github.com/tomtrasmontero"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li className="col s3">
              <a
                href="https://www.linkedin.com/in/thomas-trasmontero"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          {/* sideNav on mobile  */}
          <ul className="side-nav" id="mobile-nav">
            <li>
              <a
                className="NavBarClose"
                onClick={this.closeNav}
                role="button"
                tabIndex="0"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </li>
            <li>
              <Link to={'/'} onClick={this.closeNav}>
                Home
              </Link>
            </li>
            <li>
              <a
                href="http://tomtrasmontero.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://github.com/tomtrasmontero"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/thomas-trasmontero"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="divider" />
      </nav>
    );
  }
}

export default Navbar;
