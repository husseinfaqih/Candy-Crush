import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import ProductOverview from "../../components/ProductDisplay/ProductOverview";
import Rating from "../../components/ProductDisplay/Rating";
import Favorite from "../../components/ProductDisplay/Favorite";
import Basket from "../../components/ProductDisplay/Basket";

function RecommendationsProductPage({ category }) {
  const [products, setProducts] = useState([]);
  const serverRequest = `/product/${category}`;

  const { error, performFetch } = useFetch(serverRequest, (response) => {
    const shuffledArray = response.result
      .slice()
      .sort(() => 0.5 - Math.random());
    setProducts(shuffledArray.slice(0, 5));
  });

  useEffect(() => {
    performFetch();
  }, [category]);

  return (
    <div className="product-page-recommend-block">
      <h3 className="product-page-recommend-title">You may also like</h3>
      {products &&
        products.map((product) => {
          return (
            <div className="product-display-component" key={product._id}>
              <ProductOverview product={product} />
              <Rating productRating={product.rate} />
              <Favorite />
              <Basket product={product} />
            </div>
          );
        })}
      {error && <div>Error: {error.toString()}</div>}
    </div>
  );
}

RecommendationsProductPage.propTypes = {
  category: PropTypes.string.isRequired,
};

export default RecommendationsProductPage;
