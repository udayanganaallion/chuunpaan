import React, { Component } from "react";
import { render } from "react-dom";
import {
  Link
} from "react-router-dom"

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h4>Allion Chuun Paan</h4>
        <div className="float-right">
        <ul className="navbar-nav mr-auto">
          <Link to="/">
            <li className="nav-item active">Home</li>
          </Link>
          <Link to="/myorders">
            <li className="nav-item active">My Orders</li>
          </Link>
          <Link className="navStyle" to="/todayorders">
            <li className="nav-item">Today Orders</li>
          </Link>
          <Link className="navStyle" to="/login">
            <li className="nav-item">
              <button>Login</button>
            </li>
          </Link>
        </ul>
        </div>
        
      </nav>
    );
  }
}
