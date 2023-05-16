import React from "react";
import PropTypes from "prop-types";

function DescriptionProductPage({ description }) {
  return (
    <>
      <h4 className="product-page-description-title">Description</h4>
      <p className="product-page-description">{description}</p>
    </>
  );
}

DescriptionProductPage.propTypes = {
  description: PropTypes.string,
};

export default DescriptionProductPage;
