import React, { useEffect, useState } from "react";
import ProductOverview from "./ProductOverview";
import Rating from "./Rating";
import Favorite from "./Favorite";
import Basket from "./Basket";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";

const ProductDisplay = ({
  filterQuery,
  filterQueryChanged,
  setFilterQueryChanged,
}) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const serverRequest = `/product/${filterQuery.categories}?minPrice=${filterQuery.minPrice}&maxPrice=${filterQuery.maxPrice}&onSale=${filterQuery.onSale}&page=${page}`;

  const { isLoading, error, performFetch } = useFetch(
    serverRequest,
    (response) => {
      if (response.result.length === 0 || error != null) {
        setHasMore(false);
        setPage(0);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...response.result]);
        setHasMore(true);
      }
      setLoadingProducts(false);
    }
  );

  useEffect(() => {
    if (hasMore) performFetch();
  }, [page]);

  useEffect(() => {
    if (filterQueryChanged === true) {
      performFetch();
      setFilterQueryChanged(false);
      setProducts([]);
      setPage(0);
      setHasMore(true);
    }
  }, [filterQuery]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const windowInnerHeight = window.innerHeight;
    const bottomOfPage = scrollTop + windowInnerHeight;

    if (bottomOfPage >= scrollHeight * 0.7 && hasMore) {
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
          {products &&
            products.map((product) => {
              return (
                <div className="product-display-component" key={product._id}>
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
  filterQuery: PropTypes.object,
  filterQueryChanged: PropTypes.bool.isRequired,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default ProductDisplay;
