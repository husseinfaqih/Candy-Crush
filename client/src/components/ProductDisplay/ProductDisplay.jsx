import React from "react";
import { products } from "../../ProductDataDummy";
import ProductOverview from "./ProductOverview";
import Rating from "./Rating";
import Favorite from "./Favorite";
import Basket from "./Basket";

const ProductDisplay = () => {
  return (
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

export default ProductDisplay;