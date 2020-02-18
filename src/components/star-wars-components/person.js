import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="height" label="Height" />
      <Record field="mass" label="Mass" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="hairColor" label="Hair Color" />
      <Record field="eyeColor" label="Eye Color" />
      <Record field="skinColor" label="Skin Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  };
};

export default withSwapiService(PersonDetails, mapMethodsToProps);