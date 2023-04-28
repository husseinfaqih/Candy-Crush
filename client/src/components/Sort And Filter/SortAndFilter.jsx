import React from "react";
import PropTypes from "prop-types";
import Categories from "./Categories";
import Sort from "./Sort";

const SortAndFilter = ({
  onLowestRatedClick,
  onHighestRatedClick,
  onLowestPriceClick,
  onHighestPriceClick,
}) => {
  return (
    <div className="sortAndFilter">
      <div>{<Categories />}</div>
      {
        <Sort
          onLowestPriceClick={onLowestPriceClick}
          onHighestPriceClick={onHighestPriceClick}
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
