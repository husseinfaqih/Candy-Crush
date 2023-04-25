import React from "react";

const allCategories = [
  "Cookies",
  "Candy Corn",
  "Lollipops",
  "Hard Candy",
  "Vegetarian",
];
const Categories = () => {
  return (
    <div className="categories-div">
      <h3>Categories</h3>
      {allCategories.map((c) => (
        <button key={c} className="category-button">
          {c}
        </button>
      ))}
    </div>
  );
};

export default Categories;
