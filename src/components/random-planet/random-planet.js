import React, { Component } from "react";
import SwapiService from "../../services/swapi";

import "./random-planet.css";

export default class RabdomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    diameter: null,
    climate: null,
    orbitalPeriod: null,
    rotationPeriod: null
  };

  updatePlanet = () => {
    let id = Math.floor(Math.random() * 25 + 2);
    this.swapi.getPlanet(id).then(planet => {
      this.setState({
        id: id,
        name: planet.name,
        population: planet.population,
        diameter: planet.diameter,
        climate: planet.climate,
        orbitalPeriod: planet.orbital_period,
        rotationPeriod: planet.rotation_period
      });
    });
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  render() {
    let { id, name, rotationPeriod, orbitalPeriod, diameter, climate, population } = this.state;
    
    let imgScr = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    
    let populationVisible = (population > 10 ** 8) ? `${population / 10 ** 6} M` : population;

    return (
      <div className="random-planet">
        <div className="random-planet-image">
          <img alt={name} src={imgScr} />
        </div>
        <ul className="random-planet-info-left">
          <li className="list-group-item">
            Name: <span>{name}</span>
          </li>
          <li className="list-group-item">
            Diameter: <span>{diameter}</span>
          </li>
          <li className="list-group-item">
            Climate: <span>{climate}</span>
          </li>
        </ul>
        <ul className="random-planet-info-right">
          <li className="list-group-item">
            Population: <span>{populationVisible}</span>
          </li>
          <li className="list-group-item">
            Roration Period: <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            Orbital Period: <span>{orbitalPeriod}</span>
          </li>
        </ul>
        <div className="random-planet-buttons">
          <button className="btn btn-success">Next</button>
          <button className="btn btn-danger">Random</button>
          <button className="btn btn-success">Prev</button>
        </div>
      </div>
    );
  }
}
