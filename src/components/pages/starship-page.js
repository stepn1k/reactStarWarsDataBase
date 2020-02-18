import React from "react";
import Row from "../row";
import { withRouter } from "react-router-dom";
import { StarshipList } from "../star-wars-components/";
import { StarshipDetails } from "../star-wars-components";

const StarshipPage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Row
      left={<StarshipList onItemSelected={id => history.push(id)} />}
      right={<StarshipDetails itemId={id} />}
    />
  );
};

export default withRouter(StarshipPage);
