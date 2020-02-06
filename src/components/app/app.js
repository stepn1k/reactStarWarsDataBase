import React, { Component } from "react";
import Header from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import RandomPlanet from "../random-planet/random-planet";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="app">
          <Header />
          <RandomPlanet />
          <ItemList />
          <PersonDetails />
        </div>
      </div>
    );
  }
}
