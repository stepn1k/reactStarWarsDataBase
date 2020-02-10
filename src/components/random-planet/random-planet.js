import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapi";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./random-planet.css";

export default class RabdomPlanet extends Component {
  swapi = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet = () => {
    let id = Math.floor(Math.random() * 16 + 3);
    this.swapi
      .getPlanet(id)
      .then(planet => {
        this.onPlanetLoaded(planet);
      })
      .catch(() => this.onError());
  };

  onRandomClick = () => {
    this.setState({ loading: true });
    this.updatePlanet();
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let { planet, loading, error } = this.state;

    let hasData = !loading && !error;

    let errorIndicator = error ? <ErrorIndicator /> : null;
    let spinner = loading && !error ? <Spinner /> : null;
    let planetView = hasData ? (
      <PlanetView
        planet={planet}
        onRandomClick={this.onRandomClick}
        onNextClick={this.onNextPlanetClick}
        onPrevClick={this.onPrevPlanetClick}
      />
    ) : null;

    return (
      <React.Fragment>
        <div className="messageOrSpinner">
          {spinner}
          {errorIndicator}
        </div>
        {planetView}
      </React.Fragment>
    );
  }
}

const PlanetView = props => {
  let {
    id,
    name,
    rotationPeriod,
    orbitalPeriod,
    diameter,
    gravity,
    population
  } = props.planet;

  // Reduces numbers to readable values
  let populationVisible =
    population > 10 ** 8 ? `${population / 10 ** 6} M` : population;

  return (
    <div className="random-planet">
      <div className="random-planet-image">
        <img
          alt={name}
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
      </div>
      <ul className="random-planet-info-left">
        <li className="list-group-item">
          Name: <span>{name}</span>
        </li>
        <li className="list-group-item">
          Diameter: <span>{diameter}</span>
        </li>
        <li className="list-group-item">
          Gravity: <span>{gravity}</span>
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
      <div className="random-planet-button">
        <button className="btn btn-danger" onClick={props.onRandomClick}>
          Random
        </button>
      </div>
    </div>
  );
};
