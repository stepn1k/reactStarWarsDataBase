import React, { Component } from "react";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi";

import "./people-page.css";

class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return this.props.children;
  }
}

export default class PeoplePage extends Component {
  swapi = new SwapiService();

  state = {
    selectedItemId: null
  };

  onItemSelected = id => {
    this.setState({ selectedItemId: id });
  };

  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return (
      <React.Fragment>
          <ItemList
            onItemSelected={this.onItemSelected}
            getData={this.swapi.getAllPeople}
            renderItem={item => `${item.name} (${item.gender})`}
          />  
        <PersonDetails selectedItem={this.state.selectedItemId} />
      </React.Fragment>
    );
  }
}
