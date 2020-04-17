import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import { Button } from 'react-bootstrap'

export default class SnackItem extends Component {
  constructor(){
    super();
    // this.state = {
    //     id: '',
    //     name: '',
    //     image: '',
    //     price: '',
    // }


}


  render() {
    return (
        <div className="row">
            <div className="col-md-4 mb-3">
                <div className="card">
                    <img className="card-img-top" src={this.props.image} />
                </div>
                <div className="card-body">
                    <h5>{this.props.name}</h5> 
                    <h6>Price : { this.props.price }</h6>  
                </div>
                <div>
                    <button type="button" className="btn btn-primary">Order Now</button>
                </div>
            </div>
      </div>
    );
  }
}
