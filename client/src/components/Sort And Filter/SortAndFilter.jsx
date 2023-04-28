import React from "react";
import PropTypes from "prop-types";
import Categories from "./Categories";
import Price from "./Price";
import Rating from "./Rating";

const SortAndFilter = ({
  onLowestRatedClick,
  onHighestRatedClick,
  onLowestPriceClick,
  onHighestPriceClick,
}) => {
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
      {
        <Price
          onLowestPriceClick={onLowestPriceClick}
          onHighestPriceClick={onHighestPriceClick}
        />
      }
      <h3 style={{ margin: "2px" }}>Rating Sort</h3>
      {
        <Rating
          onLowestRatedClick={onLowestRatedClick}
          onHighestRatedClick={onHighestRatedClick}
        />
      }
    </div>
  );
};

SortAndFilter.propTypes = {
  onLowestRatedClick: PropTypes.func.isRequired,
  onHighestRatedClick: PropTypes.func.isRequired,
  onLowestPriceClick: PropTypes.func.isRequired,
  onHighestPriceClick: PropTypes.func.isRequired,
};

export default SortAndFilter;
