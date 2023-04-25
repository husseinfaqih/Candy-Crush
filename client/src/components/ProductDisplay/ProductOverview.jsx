import React from "react";
import PropTypes from "prop-types";

const ProductOverview = ({ product }) => {
  return (
    <div className="product-overview">
      <p>{product.productName}</p>
      <p>{product.price}</p>
      <img src={product.image} alt="" />
    </div>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductOverview;
