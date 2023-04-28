import React, { useState } from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import SortAndFilter from "../../components/Sort And Filter/SortAndFilter";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import NavButtons from "../../components/header/NavButtons";
import "./allProducts.css";

const AllProduct = () => {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filterQueryChanged, setFilterQueryChanged] = useState(false);
  const [filterQuery, setFilterQuery] = useState({
    categories: "all",
    minPrice: 0,
    maxPrice: 200,
    onSale: false,
  });

  const handleLowestRate = () => {
    setSortBy("rate");
    setSortOrder("1");
  };
  const handleHighestRate = () => {
    setSortBy("rate");
    setSortOrder("-1");
  };
  const handleHighestPrice = () => {
    setSortBy("price");
    setSortOrder("-1");
  };
  const handleLowestPrice = () => {
    setSortBy("price");
    setSortOrder("1");
  };

  return (
    <div>
      <NavButtons />
      <Header />

      <h1 className="product-page-title">Shop All Candy</h1>
      <SortAndFilter
        onLowestRatedClick={handleLowestRate}
        onHighestRatedClick={handleHighestRate}
        onLowestPriceClick={handleLowestPrice}
        onHighestPriceClick={handleHighestPrice}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
        filterQueryChanged={filterQueryChanged}
        setFilterQueryChanged={setFilterQueryChanged}
      />
      <ProductDisplay
        filterQuery={filterQuery}
        filterQueryChanged={filterQueryChanged}
        setFilterQueryChanged={setFilterQueryChanged}
        sortBy={sortBy}
        sortOrder={sortOrder}
      />
      <Footer />
    </div>
  );
};

export default AllProduct;
