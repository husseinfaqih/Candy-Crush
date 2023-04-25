import React from "react";
import PropTypes from "prop-types";
import "./categories.css";

export default function Category({ image, categoryName, description }) {
  return (
    <div className="categories-container">
      <img src={image} alt="" className="categories-image" />
      <div className="categories-layer">
        <div className="categories-text">
          <h3 className="categories-header-text">{categoryName}</h3>
          <span className="categories-description">{description}</span>
        </div>
      </div>
      <button className="categories-button">SHOP NOW</button>
    </div>
  );
}

//to validate the props because of eSilent warning
Category.propTypes = {
  image: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
