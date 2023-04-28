import React, { useState } from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import SortAndFilter from "../../components/Sort And Filter/SortAndFilter";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import NavButtons from "../../components/header/NavButtons";

const AllProduct = () => {
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

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
      <h1>This is the All Product Page</h1>
      <SortAndFilter
        onLowestRatedClick={handleLowestRate}
        onHighestRatedClick={handleHighestRate}
        onLowestPriceClick={handleLowestPrice}
        onHighestPriceClick={handleHighestPrice}
      />
      <ProductDisplay sortBy={sortBy} sortOrder={sortOrder} />
      <Footer />
    </div>
  );
};

export default AllProduct;
