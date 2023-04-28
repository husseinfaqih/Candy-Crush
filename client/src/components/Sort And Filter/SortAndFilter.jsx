import React from "react";
import PropTypes from "prop-types";
import Categories from "./Categories";
import Sort from "./Sort";
import PriceSlider from "./PriceSlider";
import ShowOnSaleCheckbox from "./ShowOnSaleCheckbox";
import ResetButton from "./ResetButton";

const SortAndFilter = ({
  onLowestRatedClick,
  onHighestRatedClick,
  onLowestPriceClick,
  onHighestPriceClick,
  filterQuery,
  setFilterQuery,
  filterQueryChanged,
  setFilterQueryChanged,
}) => {
  return (
    <div className="sortAndFilter">
      <div>
        {
          <Categories
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            filterQueryChanged={filterQueryChanged}
            setFilterQueryChanged={setFilterQueryChanged}
          />
        }
      </div>
      {
        <Sort
          onLowestPriceClick={onLowestPriceClick}
          onHighestPriceClick={onHighestPriceClick}
          onLowestRatedClick={onLowestRatedClick}
          onHighestRatedClick={onHighestRatedClick}
        />
      }
      {
        <PriceSlider
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          setFilterQueryChanged={setFilterQueryChanged}
        />
      }
      {
        <ShowOnSaleCheckbox
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          setFilterQueryChanged={setFilterQueryChanged}
        />
      }
      {
        <ResetButton
          setFilterQuery={setFilterQuery}
          setFilterQueryChanged={setFilterQueryChanged}
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
  filterQuery: PropTypes.object,
  setFilterQuery: PropTypes.func,
  filterQueryChanged: PropTypes.bool.isRequired,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default SortAndFilter;
