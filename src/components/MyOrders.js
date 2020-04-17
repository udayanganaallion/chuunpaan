import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import "../css/style.css";
import { Button, Table } from "react-bootstrap";
import { withRouter } from "react-router";

export default class MyOrders extends Component {
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

  componentDidMount() {}

  confirm = () => {
    if (!localStorage.getItem("name")) {
      this.props.history.push("/login");
    } else {
    }
  };

  orderItem() {
    if (this.state.items.length > 0) {
      return this.state.items.map((order, index) => {
        const { qty, price, item } = order;
        return <tr key={index} />;
      });
    } else {
      return (
        <td colSpan="5" className="text-center">
          <small>No items in your basket</small>
        </td>
      );
    }
  }

  orderMore = () => {
    this.props.history.push("/");
  };

  orderButton() {
    if (this.state.items.length > 0) {
      return (
        <Button variant="primary" onClick={this.confirm}>
          Confirm Order
        </Button>
      );
    } else {
      return <div><Button>Confirm</Button></div>;
    }
  }

  itemsList() {
    return this.state.items.map((item) => {
      return (
        <tr>
              <td>{item.id}</td>
              <td>{item.image}</td>
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
                <th>Item Code</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            {this.itemsList()}
          </Table>
        </div>
        <div className="col-md-10" />
        <div className="col-md-2 text-right">{this.orderButton()}</div>
      </div>
    );
  }
}
