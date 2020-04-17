import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import { Button, Modal } from "react-bootstrap";


export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username:'',
      password:''
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Login</h1>
          </div>
        </div>
      </div>
    )
  }
  
}
