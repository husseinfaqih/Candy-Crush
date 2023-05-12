import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductOverview = ({ product }) => {
  return (
    <div className="product-overview">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.productName} />
      </Link>
    </div>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductOverview;
