import React from "react";
import TEST_ID from "./Home.testid";
import ProductDisplay from "../../components/ProductDisplay";

const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <h1>This is the homepage</h1>
      <ProductDisplay />
    </div>
  );
};

export default Home;
