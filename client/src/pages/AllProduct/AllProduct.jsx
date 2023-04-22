import React from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import SortAndFilter from "../../components/Sort And Filter/SortAndFilter";

const AllProduct = () => {
  return (
    <div>
      <h1>This is the All Product Page</h1>
      <SortAndFilter />
      <ProductDisplay />
    </div>
  );
};

export default AllProduct;
