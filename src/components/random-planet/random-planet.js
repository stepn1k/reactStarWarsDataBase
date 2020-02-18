import React, { Component } from "react";
import PropTypes from "prop-types"
import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapi";
import ErrorIndicator from "../error-indicator/error-indicator";

import "./random-planet.scss";

export default class RabdomPlanet extends Component {

  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  }

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
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
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
        imageSrc={this.swapi.getPlanetImage(planet)}
      />
    ) : null;

    return (
      <div className="random-planet">
        {spinner}
        {errorIndicator}
        {planetView}
      </div>
    );
  }
}

const PlanetView = props => {
  let {
    name,
    rotationPeriod,
    orbitalPeriod,
    diameter,
    surfaceWater,
    population
  } = props.planet;

  // Reduces numbers to readable values
  let populationVisible =
    population > 10 ** 8 ? `${population / 10 ** 6} M` : population;

  let waterVisible =
    surfaceWater !== "unknown" ? `${surfaceWater} %` : surfaceWater;

  return (
    <React.Fragment>
      <div className="random-planet-image">
        <img alt={name} src={props.imageSrc} />
      </div>
      <ul className="random-planet-info-left">
        <li className="list-group-item">
          Name: <span>{name}</span>
        </li>
        <li className="list-group-item">
          Diameter: <span>{diameter}</span>
        </li>
        <li className="list-group-item">
          Surface Water : <span>{waterVisible}</span>
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
    </React.Fragment>
  );
};
