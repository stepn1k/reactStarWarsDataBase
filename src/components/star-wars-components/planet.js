import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population" />
      <Record field="diameter" label="Diameter" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="orbitalPeriod" label="Orbital Period" />
      <Record field="surfaceWater" label="Surface Water" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);