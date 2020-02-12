import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <h2 className="header-logo">Star Wars DB</h2>
      <div className="header-nav">
        <div className="header-nav_link">People</div>
        <div className="header-nav_link">Planets</div>
        <div className="header-nav_link">Starships</div>
      </div>
    </div>
  );
};

export default Header;
