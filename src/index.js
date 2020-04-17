import React, { Component } from "react";
import { render } from "react-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BakeryItems from "./components/BakeryItems";
import MyOrders from "./components/MyOrders";
import Login from "./components/Login";
// import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: localStorage.getItem('name')

    };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h4>Allion Chuun Paan</h4>
    
        <ul className="navbar-nav mr-auto">
          <Link to="/">
            <li classNames="nav-item active">Home</li>
          </Link>
          <Link to="/myorders">
            <li classNames="nav-item active">My Orders</li>
          </Link>
          <Link className="navStyle" to="/todayorders">
            <li classNames="nav-item">Today Orders</li>
          </Link>
          <Link className="navStyle" to="/login">
            <li classNames="nav-item">
              <button>Login</button>
            </li>
          </Link>
        </ul>
      </nav>
      </div>
    );
  }
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
