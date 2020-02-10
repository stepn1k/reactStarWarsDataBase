import React, { Component } from "react";
import Spinner from "../spinner/spinner";
import SwapiService from "../../services/swapi";
import "./person-details.css";

export default class PersonDetails extends Component {
  swapi = new SwapiService();

  state = {
    person: null,
    loading: false
  };

  updatePerson = () => {
    const { selectedItem } = this.props;
    if (!selectedItem) return;
    this.swapi.getPerson(selectedItem).then(person => {
      this.setState({ person, loading: false });
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
    const { loading, person } = this.state;

    let selectPersonText =
      !person && !loading ? <span>Select a person from a list</span> : null;

    let spinner = loading ? <Spinner /> : null;

    let hasData = person && !loading ? <DetailView person={person} /> : null;

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

const DetailView = props => {
  const { name, gender, height, mass,
    hairColor, birthYear, eyeColor, skinColor,
    id } = props.person;

  return (
    <div className="person-details">
      <div className="person-details-image">
        <img
          className="img-fluid"
          alt={name}
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />
      </div>
      <div className="person-details-info_name">
        <h4>{name}</h4>
      </div>
      <div className="person-details-info">
        <ul className="list-group">
          <li className="list-group-item">
            Gender: <span>{gender}</span>
          </li>
          <li className="list-group-item">
            Birth Year: <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            Height: <span>{height}</span>
          </li>
          <li className="list-group-item">
            Mass: <span>{mass}</span>
          </li>
          <li className="list-group-item">
            Hair Color: <span>{hairColor}</span>
          </li>
          <li className="list-group-item">
            Eye Color: <span>{eyeColor}</span>
          </li>
          <li className="list-group-item">
            Skin Color: <span>{skinColor}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
