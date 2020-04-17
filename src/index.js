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
