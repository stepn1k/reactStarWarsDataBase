import React, { Component } from "react";
import Header from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import RandomPlanet from "../random-planet/random-planet";
import "./app.css";

export default class App extends Component {
  state = {
    selectedItemId: null
  };

  onItemSelected = id => {
    this.setState({ selectedItemId: id });
  };

  render() {
    return (
      <div className="container">
        <div className="app">
          <Header />
          <RandomPlanet />
          <ItemList onItemSelected={this.onItemSelected} />
          <PersonDetails selectedItem={this.state.selectedItemId} />
        </div>
      </div>
    );
  }
}
