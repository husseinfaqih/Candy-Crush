import React from "react";
// import { products } from "../../ProductDataDummy";
import ProductOverview from "./ProductOverview";
import Rating from "./Rating";
import Favorite from "./Favorite";
import Basket from "./Basket";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";

const ProductDisplay = () => {
  const [products, setProducts] = useState(null);
  const { isLoading, error, performFetch, cancelFetch } = useFetch(
    "/product",
    (response) => {
      setProducts(response.result);
    }
  );

  useEffect(() => {
    performFetch();

    return cancelFetch;
  }, []);

  let content = null;

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (error != null) {
    content = <div>Error: {error.toString()}</div>;
  } else {
    content = (
      <div className="product-display-grid">
        {products &&
          products.map((product) => {
            return (
              <div className="product-display-component" key={product.id}>
                <ProductOverview product={product} />

                <Rating productRating={product.rate} />
                <Favorite />
                <Basket />
              </div>
            );
          })}
      </div>
    );
  }

  return <div>{content}</div>;
};

export default ProductDisplay;
