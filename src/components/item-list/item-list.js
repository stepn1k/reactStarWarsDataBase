import React from "react";
import PropTypes from "prop-types";

import "./item-list.scss";

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
  };

  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

export default ItemList;
