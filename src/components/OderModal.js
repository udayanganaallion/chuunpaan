import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import { Button, Modal } from "react-bootstrap";

export default class OderModal extends Component {
  
    constructor(props) {
        super(props);
        this.state = this.initialState;
      }
    
      get initialState() {
        return {
          modalShow: false,
          myOrders: [],
          qty: 0,
          formErrors: {
            qty: "Qty should more than zero",
          },
          qtyValid: false,
          formSubmitted: false,
          orderPrice: 0,
        };
      }
     

    render() {
        return (
            <div>
            <Modal show={this.state.modalShow} onHide={this.handleClose}>
              <Modal.Header closeButton>
                {/* <Modal.Title>{this.props.item.name}</Modal.Title> */}
              </Modal.Header>
              <Modal.Body>
                <div className="form-group row">
                  <label htmlFor="qty" className="col-sm-2 col-form-label">
                    Qty
                  </label>
                  
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  No, Thanks
                </Button>
                <Button variant="primary" onClick={this.order}>
                  Order
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )
      }

}
