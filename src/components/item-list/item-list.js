import React from "react";
import "./item-list.css";

const ItemList = () => {
  return (
    <div className="item-list">
      <ul className="list-group">
        <li className="list-group-item">R2-D2</li>
        <li className="list-group-item">Luke Skywalker</li>
        <li className="list-group-item">C-3PO</li>
        <li className="list-group-item">Darth Vader</li>
        <li className="list-group-item">Leia Organa</li>
        <li className="list-group-item">Beru Whitesun lars</li>
        <li className="list-group-item">Obi-Wan Kenobi</li>
      </ul>
    </div>
  );
};

export default ItemList;
