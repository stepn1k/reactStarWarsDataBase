import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapi";
import "./person-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: <span>{field}</span>
    </li>
  );
};

export { Record };

export default class PersonDetails extends Component {
  swapi = new SwapiService();

  state = {
    person: null,
    loading: false,
    image: null
  };

  updatePerson = () => {
    const { selectedItem, getData, getImageUrl } = this.props;
    if (!selectedItem) return;
    getData(selectedItem).then(person => {
      this.setState({ person, loading: false, image: getImageUrl(person) });
    });
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  render() {
    const { loading, person, image } = this.state;

    let selectPersonText =
      !person && !loading ? <span>Select a person from a list</span> : null;

    let spinner = loading ? <Spinner /> : null;

    let hasData =
      person && !loading && image ? (
        <div className="person-details">
          <div className="person-details-image">
            <img className="img-fluid" alt={person.name} src={image} />
          </div>
          <div className="person-details-info_name">
            <h4>{person.name}</h4>
          </div>
          <div className="person-details-info">
            <ul className="list-group">
              {React.Children.map(this.props.children, child => {
                return child
              })}
            </ul>
          </div>
        </div>
      ) : null;

    return (
      <React.Fragment>
        <div className="noData">
          {spinner}
          {selectPersonText}
        </div>
        {hasData}
      </React.Fragment>
    );
  }
}
