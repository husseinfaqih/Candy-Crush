import React, { useState } from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import SortAndFilter from "../../components/Sort And Filter/SortAndFilter";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import NavButtons from "../../components/header/NavButtons";

const AllProduct = () => {
  const [filterQuery, setFilterQuery] = useState({
    categories: "all",
    minPrice: 0,
    maxPrice: 200,
    onSale: false,
  });
  const [filterQueryChanged, setFilterQueryChanged] = useState(false);
  return (
    <div>
      <NavButtons />
      <Header />
      <h1>This is the All Product Page</h1>
      <SortAndFilter
        filterQuery={filterQuery}
        setFilterQuery={setFilterQuery}
        filterQueryChanged={filterQueryChanged}
        setFilterQueryChanged={setFilterQueryChanged}
      />
      <ProductDisplay
        filterQuery={filterQuery}
        filterQueryChanged={filterQueryChanged}
        setFilterQueryChanged={setFilterQueryChanged}
      />
      <Footer />
    </div>
  );
};

export default AllProduct;
