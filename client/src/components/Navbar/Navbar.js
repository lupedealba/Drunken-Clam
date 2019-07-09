//sets up the reusable Navbar component "rfc"
// import React, { Component } from "react";
import React from "react";
import logo from './images/logo.png';
 // Tell Webpack this JS file uses this image
import "./Navbar.css";

const bgColor = {
  backgroundColor: '#3f51b5',
  paddingRight: '2.5vw',
  paddingLeft: '2.5vw'
}

/////////////////////////////////////////////////////
// class Navbar extends Component {
//   render() {
  function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={bgColor}>
  <img src={logo} width="100" height="100" alt="Logo" />
  <a className="navbar-brand app-title" href="https://github.com/lupedealba/maverick-move">Maverick Move</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="https://github.com/lupedealba/maverick-move">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/lupedealba/maverick-move">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="https://github.com/lupedealba/maverick-move" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="https://github.com/lupedealba/maverick-move">Action</a>
            <a className="dropdown-item" href="https://github.com/lupedealba/maverick-move">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="https://github.com/lupedealba/maverick-move">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="https://github.com/lupedealba/maverick-move" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
</nav>
    );
  }

export default Navbar;