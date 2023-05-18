import React from "react";
import PropTypes from "prop-types";

function ImageProductPage({ image }) {
  return <img className="product-page-image" src={image} alt="product image" />;
}

ImageProductPage.propTypes = {
  image: PropTypes.string,
};

export default ImageProductPage;
