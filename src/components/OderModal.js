import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import { Button, Modal } from "react-bootstrap";

export default class OderModal extends Component {
  
    constructor(){
        super();
        this.state = { snacks: [] }
    }

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
