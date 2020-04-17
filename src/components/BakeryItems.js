import React, { Component } from "react";
import { render } from "react-dom";
import SnackItem from "../components/SnackItem"
import Items from "../data/Snacks";

import OderModal from "../components/OderModal";

import {
  Button
} from 'react-bootstrap'

export default class BakeryItems extends Component {
  constructor(){
    super();
    this.state = { snacks: Items }
    // this.setState({ snacks: Items });

}

render() {
  const snackItems = this.state.snacks;
    return (
     
      <div className="container">
        <div className="row">
            {snackItems.map(item=>
                  <SnackItem id = {item.id}
                  name = {item.name}
                  image = {item.image}
                  price = {item.price} />
                
            )}  
        </div>
      </div>
    )
  }
}
