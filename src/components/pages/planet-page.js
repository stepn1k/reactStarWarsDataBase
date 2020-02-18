import React from "react";
import Row from "../row";
import { PlanetList } from "../star-wars-components/";
import { PlanetDetails } from "../star-wars-components";
import { withRouter } from "react-router-dom";

const PlanetPage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PlanetList onItemSelected={id => history.push(id)} />}
      right={<PlanetDetails itemId={id} />}
    />
  );
};

export default withRouter(PlanetPage);
