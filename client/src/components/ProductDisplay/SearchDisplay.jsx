import React from "react";
import ProductOverview from "./ProductOverview";
import Rating from "./Rating";
import FavoriteIcon from "./FavoriteIcon";
import Basket from "./Basket";
import PropTypes from "prop-types";
import ProductTitleAndPrice from "./ProductTitleAndPrice";

const SearchDisplay = ({ products }) => {
  return (
    <div className="favorite-block">
      {products.length === 0 ? (
        <div className="product-display-grid">
          <h2 className="favorite-title">We cannot find any products</h2>
        </div>
      ) : (
        <div className="product-display-grid">
          {products &&
            products.map((product) => {
              return (
                <div className="product-display-component" key={product._id}>
                  <ProductOverview product={product} />
                  <div className="white-background">
                    <ProductTitleAndPrice product={product} />
                    <Rating productRating={product.rate} product={product} />
                    <div className="product-options">
                      <FavoriteIcon product={product} />
                      <Basket product={product} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

SearchDisplay.propTypes = {
  products: PropTypes.array.isRequired,
};

export default SearchDisplay;
