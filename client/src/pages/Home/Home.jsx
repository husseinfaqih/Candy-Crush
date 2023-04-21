import React from "react";
import Header from "../../components/header/Header";
import Promotion from "../../components/promotion/Promotion";
import { categories } from "../../fakeCategories.js";
import Category from "../../components/category/Category";
const Home = () => {
  return (
    <div>
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
          <Category
            key={category.descText}
            imageUrl={category.imageUrl}
            headerText={category.headerText}
            descText={category.descText}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
