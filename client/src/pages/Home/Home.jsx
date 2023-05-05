import React from "react";
import Header from "../../components/header/Header";
import Promotion from "../../components/promotion/Promotion";
import Footer from "../../components/Footer/Footer";
import Categories from "../../components/category/Categories";

const Home = () => {
  return (
    <div>
      <Header />
      <Promotion />
      <h1 style={{ textAlign: "center" }}>Categories</h1>
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
