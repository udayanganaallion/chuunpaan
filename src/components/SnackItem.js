import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import OderModal from "../components/OderModal"
import { Button } from 'react-bootstrap'

export default class SnackItem extends Component {
  constructor(){
    super();
    this.state = { showModal: false }   
}

handleSubmit(event) {
    event.preventDefault();
    this.setState({showModal: true})
}


  render() {
    return (
            <div className="col-md-4 mb-3">
                <div className="card">
                    <img className="card-img-top" src={this.props.image} />
                </div>
                <div className="card-body">
                    <h5>{this.props.name}</h5> 
                    <h6>Price : { this.props.price }</h6>  
                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Order Now</button>
                </div>
            
                <OderModal show={this.state.showModal} item={this.state.selectedItem} />
            </div>
    );
  }
}
