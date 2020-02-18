import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-logo">
        Star Wars DB
        </Link>
      <div className="header-nav">
        <Link to="/people/" className="header-nav_link">
          People
        </Link>
        <Link to="/planets/" className="header-nav_link">
          Planets
        </Link>
        <Link to="/starships/" className="header-nav_link">
          Starships
        </Link>
      </div>
    </div>
  );
};

export default Header;
