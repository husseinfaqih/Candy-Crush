import React, { useEffect } from "react";
import { products } from "../../ProductDataDummy";
import ProductOverview from "./ProductOverview";
import Rating from "./Rating";
import Favorite from "./Favorite";
import Basket from "./Basket";
import PropTypes from "prop-types";

const ProductDisplay = ({ displayedProducts, setDisplayedProducts }) => {
  useEffect(() => {
    setDisplayedProducts(products);
  }, []);

  return (
    <div className="product-display-grid">
      {displayedProducts &&
        displayedProducts.map((product) => {
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

ProductDisplay.propTypes = {
  displayedProducts: PropTypes.array,
  setDisplayedProducts: PropTypes.func,
};

export default ProductDisplay;
