import React from "react";
import Categories from "./Categories";
import Price from "./Price";
import Rating from "./Rating";
import PropTypes from "prop-types";

const SortAndFilter = () => {
  return (
    <div
      className="sortAndFilter"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "15vw",
        backgroundColor: "gray",
        float: "left",
      }}
    >
      <h3 style={{ margin: "2px" }}>Categories</h3>
      {<Categories />}
      <h3 style={{ margin: "2px" }}>Price Sort</h3>
      {<Price />}
      <h3 style={{ margin: "2px" }}>Rating Sort</h3>
      {<Rating />}
    </div>
  );
};

SortAndFilter.propTypes = {
  displayedProducts: PropTypes.array,
  setDisplayedProducts: PropTypes.func,
};

export default SortAndFilter;
