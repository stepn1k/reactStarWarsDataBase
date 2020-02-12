import React from "react";
import "./error-indicator.css";
import icon from "./death-star.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="error-indicator-img">
        <img src={icon} alt="error-icon" />
      </div>
      <div className="error-indicator-text">
        <span className="error-indicator-text-boom">BOOM!</span>
        <span>Something has gone terribly wrong</span>
        <span>(but we already sent droids to fix it)</span>
      </div>
    </div>
  );
};

export default ErrorIndicator;
