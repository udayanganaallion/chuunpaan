import React, { Component } from "react";
import { render } from "react-dom";
import Items from "../data/Snacks";
import { Button, Modal } from "react-bootstrap";


export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username:''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {    
    this.setState({username: event.target.value});  
  }

  handleSubmit(event) {
    if (this.state.username !== '') {
      this.props.userLogin(this.state.username);
    }    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={event => {
              event.preventDefault()
              this.handleSubmit(event)
            }} className="form-signin">
                <h1 class="h3 mb-3 font-weight-normal text-center">Guest Login</h1>
              <div className="form-group">
                <label for="name" class="sr-only">User name</label>
                <input type="text" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Type user name" required></input>
                <div class="invalid-feedback">Please enter your name</div>
              </div>
              <div className="form-group">
                <button className="btn btn-lg btn-primary btn-block mt-3" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
}
