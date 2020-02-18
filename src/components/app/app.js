import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, StarshipPage, PlanetPage, WelcomePage } from "../pages";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SwapiService from "../../services/swapi";
import "./app.scss";

const App = () => {
  const swapi = new SwapiService();
  return (
    <SwapiServiceProvider value={swapi}>
      <Router>
        <div className="container">
          <div className="app">
            <Header />
            <RandomPlanet />
            <Route path="/" component={WelcomePage} exact />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets/:id?" component={PlanetPage} />
            <Route path="/starships/:id?" component={StarshipPage} />
          </div>
        </div>
      </Router>
    </SwapiServiceProvider>
  );
};

export default App;
