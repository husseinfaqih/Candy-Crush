import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SearchDisplay from "../../components/ProductDisplay/SearchDisplay";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";

const SearchResultPage = () => {
  const { state } = useLocation();
  const { productsSearch } = state;

  return (
    <div>
      <Header />
      <h1 className="search-result-page-title">Result of search</h1>
      <SearchDisplay products={productsSearch} />
      <Footer />
    </div>
  );
};
SearchResultPage.propTypes = {
  productsSearch: PropTypes.array,
};
export default SearchResultPage;
