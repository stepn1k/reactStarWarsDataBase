import React, { Component } from "react";
import SwapiService from "../../services/swapi";
import Spinner from "../spinner/spinner";
import "./item-list.css";

export default class ItemList extends Component {
  swapi = new SwapiService();

  state = {
    itemList: null
  };

  componentDidMount() {
    this.swapi.getAllPeople().then(itemList => this.setState({ itemList }));
  }

  renderItems = arr => {
    return arr.map(({ name, id }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { itemList } = this.state;

    if (!itemList) return <div className="loading"><Spinner /></div>

    const items = this.renderItems(itemList);

    return (
      <div className="item-list">
        <ul className="list-group">{items}</ul>
      </div>
    );
  }
}
