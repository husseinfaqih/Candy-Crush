import React from "react";
import ProductOverview from "./ProductOverview";
import Rating from "./Rating";
import Favorite from "./Favorite";
import Basket from "./Basket";
import PropTypes from "prop-types";

const SearchDisplay = ({ products }) => {
  return products.length === 0 ? (
    <div className="product-display-grid">
      <h2>We cannot find any products</h2>
    </div>
  ) : (
    <div className="product-display-grid">
      {products.map((product) => {
        return (
          <div className="product-display-component" key={product.id}>
            <ProductOverview product={product} />
            <Rating productRating={product.rating} />
            <Favorite />
            <Basket />
          </div>
        );
      })}
    </div>
  );
};

SearchDisplay.propTypes = {
  products: PropTypes.array.isRequired,
};

export default SearchDisplay;
