import React, { Component } from "react";

import "./item-details.scss";
import Spinner from "../spinner/spinner";

const Record = ({ item, field, label }) => {
  let viewField = item[field];

  if (item[field] >= 10 ** 9) {
    viewField = `${item[field] / 10 ** 9} B`;
  }

  if (item[field] < 10 ** 9 && item[field] >= 10 ** 6) {
    viewField = `${item[field] / 10 ** 6} M`;
  }

  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span className="value">{viewField}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({
        item,
        image: getImageUrl(item),
        loading: false
      });
    });
  }

  render() {
    const { item, image, loading } = this.state;

    if (loading) return <Spinner />;
    if (!item && !loading) {
      return (
        <span className="select-item-text">Select an item from a list</span>
      );
    }

    const { name } = item;

    return (
      <div className="item-details">
        <h4>{name}</h4>
        <div className="card-body">
          <img className="item-image" src={image} alt="item" />
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
