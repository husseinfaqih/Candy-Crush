import React from "react";
import Header from "../../components/header/Header";
import Promotion from "../../components/promotion/Promotion";
import { categories } from "../../fakeCategories.js";
import Category from "../../components/category/Category";
import Footer from "../../components/Footer/Footer";
import NavButtons from "../../components/header/NavButtons";
const Home = () => {
  return (
    <div>
      <NavButtons />
      <Header />
      <Promotion />
      <h1 style={{ textAlign: "center" }}>Categories</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          backgroundColor: "#FEE588",
        }}
      >
        {categories.map((category) => (
          <Category key={category.headerText} {...category} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
