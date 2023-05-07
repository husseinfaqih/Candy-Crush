import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

function useSearch(searchWord) {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const { performFetch, cancelFetch } = useFetch("/product", (response) => {
    setProducts(response.result);
  });
  useEffect(() => {
    performFetch();
    return cancelFetch;
  }, []);

  function handleSearch() {
    const filteredData = products.filter((item) => {
      const productName = item.productName
        ? item.productName.toLowerCase()
        : "";
      const category = item.category ? item.category.toLowerCase() : "";
      const searchTermLower = searchWord ? searchWord.toLowerCase() : "";
      return (
        productName.includes(searchTermLower) ||
        category.includes(searchTermLower)
      );
    });

    filteredData &&
      navigate("/searchResult", { state: { productsSearch: filteredData } });
  }

  function showSuggestion(word) {
    const suggestions = products
      .filter((item) => {
        return item.productName.toLowerCase().includes(word.toLowerCase());
      })
      .map((suggestion) => ({
        productName: suggestion.productName,
        _id: suggestion._id,
      }));

    return suggestions;
  }
  return [handleSearch, showSuggestion];
}

useSearch.propTypes = {
  searchWord: PropTypes.string.isRequired,
};

export default useSearch;
