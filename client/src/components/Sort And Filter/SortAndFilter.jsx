import React from "react";
import Categories from "./Categories";
import Sort from "./Sort";

const SortAndFilter = () => {
  return (
    <div className="sortAndFilter">
      <div>{<Categories />}</div>
      {<Sort />}
    </div>
  );
};

export default SortAndFilter;
