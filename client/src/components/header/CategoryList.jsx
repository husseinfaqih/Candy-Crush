import React, { useState } from "react";

function CategoryList() {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(["Cookies", "Candy Corn"]);

  return (
    <div className="header-category-list-block">
      <label>Categories</label>
      <select
        name="category"
        id="category-select"
        className="header-category-list"
      >
        {categories &&
          categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default CategoryList;
