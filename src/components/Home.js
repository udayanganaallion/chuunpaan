import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import MyOrders from "./MyOrders";
import TodayOrders from "./TodayOrders";

export class Home extends React.Component {
  render() {
    return (
      
        <div>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/myorders" exact component={MyOrders} />
            <Route path="/todayorders" exact component={TodayOrders} />
          </Switch>
          <Footer/>
        </div>
     
    );
  }
}

export default Home;
