import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SearchDisplay from "../../components/ProductDisplay/SearchDisplay";

const SearchResultPage = () => {
  const { state } = useLocation();
  const { productsSearch } = state;

  return (
    <div>
      <h1>Result of search</h1>
      <SearchDisplay products={productsSearch} />
    </div>
  );
};
SearchResultPage.propTypes = {
  productsSearch: PropTypes.array,
};
export default SearchResultPage;
