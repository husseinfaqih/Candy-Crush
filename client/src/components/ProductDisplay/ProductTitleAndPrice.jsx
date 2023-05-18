import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductTitleAndPrice = ({ product }) => {
  return (
    <div className="title-price">
      <p className="product-name">
        <Link className="product-overview-name" to={`/product/${product._id}`}>
          {product.productName}
        </Link>
      </p>

      <p className="product-price">€{product.price}</p>
    </div>
  );
};

ProductTitleAndPrice.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductTitleAndPrice;
