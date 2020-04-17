import React, { Component } from "react";
import { render } from "react-dom";
import {
  Link
} from "react-router-dom"

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <h3>React Crash App</h3>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/myorders">
            <li>My Orders</li>
          </Link>
          <Link className="navStyle" to="/todayorders">
            <li>Today Orders</li>
          </Link>
          <Link className="navStyle" to="/login">
            <li>
              <button>Login</button>
            </li>
          </Link>
        </ul>
      </nav>
    );
  }
}
