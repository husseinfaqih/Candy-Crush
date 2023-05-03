import React from "react";
import PropTypes from "prop-types";
import "./categories.css";
import { Link } from "react-router-dom";

export default function Category({ image, categoryName, description }) {
  const link = `/products/${categoryName}`;
  return (
    <div className="categories-container">
      <img src={image} alt="" className="categories-image" />
      <div className="categories-layer">
        <div className="categories-text">
          <h3 className="categories-header-text">{categoryName}</h3>
          <span className="categories-description">{description}</span>
        </div>
      </div>

      <Link to={link}>
        <button className="categories-button"> SHOP NOW </button>
      </Link>
    </div>
  );
}

Category.propTypes = {
  image: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
