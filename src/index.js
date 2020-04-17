import React, { Component } from "react";
import { render } from "react-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TodayOrders from "./components/TodayOrders";
import MyOrders from "./components/MyOrders";
import BakeryItems from "./components/BakeryItems";
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

  userLogin = username => {
    localStorage.setItem('name', username)
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route  exact path="/">
                <BakeryItems />
            </Route>
            <Route path="/myorders">
                <MyOrders />
            </Route>
            <Route path="/todayorders">
                <TodayOrders />
            </Route>
            <Route path="/login">
                <Login userLogin={this.userLogin}/>
            </Route>
          </Switch>
		    </div>
        {/* <Footer /> */}
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
