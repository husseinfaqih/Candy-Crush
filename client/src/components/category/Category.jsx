import React from "react";
import PropTypes from "prop-types";
import "./categories.css";

export default function Category({ imageUrl, headerText, descText }) {
  return (
    <div className="categories-container">
      <img src={imageUrl} alt="" className="categories-image" />
      <div className="categories-layer">
        <div className="categories-text">
          <h3 className="categories-header-text">{headerText}</h3>
          <span className="categories-description">{descText}</span>
        </div>
      </div>
      <button className="categories-button">SHOP NOW</button>
    </div>
  );
}

//to validate the props because of eSilent warning
Category.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  descText: PropTypes.string.isRequired,
};
