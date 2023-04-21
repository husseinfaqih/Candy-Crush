import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";

function SearchComponent(searchWord) {
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
    // eslint-disable-next-line no-console
    console.log(filteredData);
  }
  return [handleSearch];
}

SearchComponent.propTypes = {
  searchWord: PropTypes.string.isRequired,
};

export default SearchComponent;
