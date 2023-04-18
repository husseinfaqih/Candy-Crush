import React from "react";

function CategoryList() {
  return (
    <div className="header-category-list-block">
      <label>Categories</label>
      <select
        name="category"
        id="category-select"
        className="header-category-list"
      >
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
        <option value="category4">Category 4</option>
        <option value="category5">Category 5</option>
      </select>
    </div>
  );
}

export default CategoryList;
