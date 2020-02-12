import React, { Component } from "react";
import Header from "../header/header";
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list/item-list";
import PersonDetails, { Record } from "../person-details/person-details";

import RandomPlanet from "../random-planet/random-planet";
import "./app.css";
import SwapiService from "../../services/swapi";

export default class App extends Component {
  swapi = new SwapiService();

  render() {
    return (
      <div className="container">
        <div className="app">
          <Header />
          <RandomPlanet />
          {/* <PeoplePage /> */}

          {/* <ItemList
            getData={this.swapi.getAllPlanets}
            renderItem={item => item.name}
          /> */}
          <PersonDetails
            selectedItem={11}
            getData={this.swapi.getPerson}
            getImageUrl={this.swapi.getPersonImage}
          >
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
          </PersonDetails>

          {/* <ItemList
            getData={this.swapi.getAllStarships}
            renderItem={item => item.name}
          /> */}
          <PersonDetails
            selectedItem={5}
            getData={this.swapi.getStarship}
            getImageUrl={this.swapi.getStarshipImage}
          />
        </div>
      </div>
    );
  }
}
