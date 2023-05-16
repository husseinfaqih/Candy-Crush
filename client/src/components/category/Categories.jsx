import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Category from "./Category";

export default function Categories() {
  const [categories, setCategories] = useState(null);
  const { performFetch } = useFetch("/category", (response) => {
    setCategories(response.result);
  });

  useEffect(() => {
    performFetch();
  }, []);
  return (
    <div className="category">
      <div>
        <h1 className="category-main-title">Categories</h1>
      </div>

      <div className="categories-container">
        {categories &&
          categories.map((category) => (
            <Category key={category._id} {...category} />
          ))}
      </div>
    </div>
  );
}
