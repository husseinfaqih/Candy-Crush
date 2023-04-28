import React from "react";
import PropTypes from "prop-types";
import ProductOverview from "./ProductOverview";
import Rating from "./Rating";
import Favorite from "./Favorite";
import Basket from "./Basket";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";

const ProductDisplay = ({ sortBy, sortOrder }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const { isLoading, error, performFetch } = useFetch(
    `/product?page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    (response) => {
      if (response.result.length === 0 || error != null) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...response.result]);
      }
      setLoadingProducts(false);
    }
  );

  useEffect(() => {
    performFetch();
  }, [page, sortBy, sortOrder]);

  useEffect(() => {
    setProducts([]);
    setPage(0);
    setHasMore(true);
    setLoadingProducts(true);
  }, [sortBy, sortOrder]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const windowInnerHeight = window.innerHeight;

    if (windowInnerHeight + scrollTop + 1 >= scrollHeight && hasMore) {
      setPage((prev) => prev + 1);
      setLoadingProducts(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  let content = null;

  if (isLoading && products.length === 0) {
    content = <div>loading...</div>;
  } else if (error != null) {
    content = <div>Error: {error.toString()}</div>;
  } else {
    content = (
      <>
        <div className="product-display-grid">
          {products.map((product) => {
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
        {loadingProducts && <h1>Loading Products</h1>}
        {!hasMore && <h1>No more products to fetch</h1>}
      </>
    );
  }

  return <div>{content}</div>;
};

ProductDisplay.propTypes = {
  sortBy: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired, // Add this line for sortOrder validation
};

export default ProductDisplay;
