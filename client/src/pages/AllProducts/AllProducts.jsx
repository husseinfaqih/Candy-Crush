import React, { useEffect, useState } from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import SortAndFilter from "../../components/Sort And Filter/SortAndFilter";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import "./allProducts.css";
import { useLocation, useParams } from "react-router-dom";

const AllProduct = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filterQueryChanged, setFilterQueryChanged] = useState(false);
  const [sortActive, setSortActive] = useState("");
  const { category } = useParams();

  const [filterQuery, setFilterQuery] = useState({
    categories: category ? category : "all",
    minPrice: 0,
    maxPrice: 200,
    onSale: false,
    inStock: false,
  });

  const handleLowestRate = () => {
    if (
      sortBy == "" ||
      sortOrder === "-1" ||
      sortBy === "price" ||
      sortBy === "productName"
    ) {
      setSortBy("rate");
      setSortOrder("1");
      setSortActive("RATE/ LOW TO HIGH");
    } else {
      setSortBy("");
      setSortOrder("");
      setSortActive("");
    }
  };
  const handleHighestRate = () => {
    if (
      sortBy == "" ||
      sortOrder === "1" ||
      sortBy === "price" ||
      sortBy === "productName"
    ) {
      setSortBy("rate");
      setSortOrder("-1");
      setSortActive("RATE/ HIGH TO LOW");
    } else {
      setSortBy("");
      setSortOrder("");
      setSortActive("");
    }
  };
  const handleHighestPrice = () => {
    if (
      sortBy == "" ||
      sortOrder === "1" ||
      sortBy === "rate" ||
      sortBy === "productName"
    ) {
      setSortBy("price");
      setSortOrder("-1");
      setSortActive("PRICE/ HIGH TO LOW");
    } else {
      setSortBy("");
      setSortOrder("");
      setSortActive("");
    }
  };
  const handleLowestPrice = () => {
    if (
      sortBy == "" ||
      sortOrder === "-1" ||
      sortBy === "rate" ||
      sortBy === "productName"
    ) {
      setSortBy("price");
      setSortOrder("1");
      setSortActive("PRICE/ LOW TO HIGH");
    } else {
      setSortBy("");
      setSortOrder("");
      setSortActive("");
    }
  };
  const handleZtoA = () => {
    if (
      sortBy === "" ||
      sortOrder === "1" ||
      sortBy === "rate" ||
      sortBy === "price"
    ) {
      setSortBy("productName");
      setSortOrder("-1");
      setSortActive("SORT Z TO A");
    } else {
      setSortBy("");
      setSortOrder("");
      setSortActive("");
    }
  };
  const handleAtoZ = () => {
    if (
      sortBy === "" ||
      sortOrder === "-1" ||
      sortBy === "rate" ||
      sortBy === "price"
    ) {
      setSortBy("productName");
      setSortOrder("1");
      setSortActive("SORT A TO Z");
    } else {
      setSortBy("");
      setSortOrder("");
      setSortActive("");
    }
  };

  return (
    <div>
      <Header page="allProducts" />

      <h1 className="product-page-title">Shop All Candy</h1>
      <SortAndFilter
        onLowestRatedClick={handleLowestRate}
        onHighestRatedClick={handleHighestRate}
        onLowestPriceClick={handleLowestPrice}
        onHighestPriceClick={handleHighestPrice}
        onZtoAClick={handleZtoA}
        onAtoZClick={handleAtoZ}
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
        filterQueryChanged={filterQueryChanged}
        setFilterQueryChanged={setFilterQueryChanged}
        sortActive={sortActive}
        setSortBy={setSortBy}
        setSortOrder={setSortOrder}
        setSortActive={setSortActive}
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
