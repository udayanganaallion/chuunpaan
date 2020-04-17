import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import "../css/style.css"
import { Button, Modal, Table } from "react-bootstrap";

export default class TodayOrders extends Component {

  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    let myOrders = localStorage.getItem("myorders");
    let items = [];
    if (myOrders) {
      items = JSON.parse(myOrders);
    }
    return {
      items: items
    };
  }

  itemsList() {
    return this.state.items.map((item) => {
      return (
        <tr>
              <td>{user.name}</td>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
        </tr>
      );
    });
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Person Name</th>
                <th>Item Name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            {this.itemsList()}
          </Table>
        </div>
      </div>
    );
  }
}
