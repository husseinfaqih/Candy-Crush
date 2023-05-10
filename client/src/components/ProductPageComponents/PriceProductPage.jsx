import React from "react";
import PropTypes from "prop-types";

function PriceProductPage({ price }) {
  return <p className="product-page-price">€{price}</p>;
}

PriceProductPage.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PriceProductPage;
