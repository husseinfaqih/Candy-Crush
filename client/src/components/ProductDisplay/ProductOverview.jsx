import React from "react";
import PropTypes from "prop-types";

const ProductOverview = ({ productName, price, description, image }) => {
  return (
    <div className="product-overview">
      <p>{productName}</p>
      <p>{price}</p>
      <p>{description}</p>
      <img src={image} alt="" />
    </div>
  );
};

ProductOverview.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductOverview;
