import React, { useState } from "react";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import SortAndFilter from "../../components/Sort And Filter/SortAndFilter";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import NavButtons from "../../components/header/NavButtons";

const AllProduct = () => {
  const [displayedCategory, setDisplayedCategory] = useState(null);
  return (
    <div>
      <NavButtons />
      <Header />
      <h1>This is the All Product Page</h1>
      <SortAndFilter
        displayedCategory={displayedCategory}
        setDisplayedCategory={setDisplayedCategory}
      />
      <ProductDisplay
        displayedCategory={displayedCategory}
        setDisplayedCategory={setDisplayedCategory}
      />
      <Footer />
    </div>
  );
};

export default AllProduct;
