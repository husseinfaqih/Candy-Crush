import React from "react";
import Category from "../../components/category/Category";
import { categories } from "../../fakeCategories";

const Home = () => {
  return (
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
  );
};

export default Home;
