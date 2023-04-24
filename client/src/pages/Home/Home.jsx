import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Promotion from "../../components/promotion/Promotion";
// import { categories } from "../../fakeCategories.js";
import Category from "../../components/category/Category";
import Footer from "../../components/Footer/Footer";
import NavButtons from "../../components/header/NavButtons";
import useFetch from "../../hooks/useFetch";
const Home = () => {
  const [categories, setCategories] = useState(null);
  const { performFetch } = useFetch("/category", (response) => {
    setCategories(response.result);
  });

  useEffect(() => {
    performFetch();
  }, []);
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
        {categories &&
          categories.map((category) => (
            <Category key={category._id} {...category} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
