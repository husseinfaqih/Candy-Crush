import React, { useState } from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import SortAndFilter from "../../components/Sort And Filter/SortAndFilter";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import NavButtons from "../../components/header/NavButtons";

const AllProduct = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  return (
    <div>
      <NavButtons />
      <Header />
      <h1>This is the All Product Page</h1>
      <SortAndFilter
        displayedProducts={displayedProducts}
        setDisplayedProducts={setDisplayedProducts}
      />
      <ProductDisplay
        displayedProducts={displayedProducts}
        setDisplayedProducts={setDisplayedProducts}
      />
      <Footer />
    </div>
  );
};

export default AllProduct;
