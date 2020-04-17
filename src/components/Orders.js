import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import "../css/style.css"
import { Button, Modal, Table } from "react-bootstrap";

export default class Orders extends Component {

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Orders</h1>
              </div>
            </div>
          </div>
        )
      }


}
