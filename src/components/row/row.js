import React from "react";
import PropTypes from "prop-types";
import "./row.scss";

const Row = ({ left, right }) => {
  Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
  };

  return (
    <div className="row">
      <div className="row_left-column">{left}</div>
      <div className="row_right-column">{right}</div>
    </div>
  );
};

export default Row;
