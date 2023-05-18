import React, { useEffect, useState, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";
import FavoriteICon from "./FavoriteIcon";
import Basket from "./Basket";
import ProductTitleAndPrice from "./ProductTitleAndPrice";
import useFetch from "../../hooks/useFetch";

const ProductOverview = lazy(() => import("./ProductOverview"));

const ProductDisplay = ({
  sortBy,
  sortOrder,
  filterQuery,
  filterQueryChanged,
  setFilterQueryChanged,
}) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const serverRequest = `/product/${filterQuery.categories}?minPrice=${filterQuery.minPrice}&maxPrice=${filterQuery.maxPrice}&onSale=${filterQuery.onSale}&inStock=${filterQuery.inStock}&sortBy=${sortBy}&sortOrder=${sortOrder}`;

  const { error, performFetch } = useFetch(serverRequest, (response) => {
    setProducts(response.result);
    setLoadingProducts(false);
  });

  useEffect(() => {
    setProducts([]);
    performFetch();
    setLoadingProducts(true);
  }, [sortBy, sortOrder]);

  useEffect(() => {
    if (filterQueryChanged === true) {
      setProducts([]);
      performFetch();
      setFilterQueryChanged(false);
      setLoadingProducts(true);
    }
  }, [filterQuery]);

  return (
    <div className="product-container">
      <Suspense fallback={<div>Loading Product Overview...</div>}>
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
                      <FavoriteICon product={product} />
                      <Basket product={product} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Suspense>
      {loadingProducts && <h1>Loading Products</h1>}
      {error && <div>Error: {error.toString()}</div>}
    </div>
  );
};

ProductDisplay.propTypes = {
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  filterQuery: PropTypes.object,
  filterQueryChanged: PropTypes.bool.isRequired,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default ProductDisplay;
