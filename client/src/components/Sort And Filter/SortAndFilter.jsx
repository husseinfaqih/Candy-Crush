import React from "react";
import PropTypes from "prop-types";
import Categories from "./Categories";
import Sort from "./Sort";
import PriceSlider from "./PriceSlider";
import ShowOnSaleCheckbox from "./ShowOnSaleCheckbox";
import ResetButton from "./ResetButton";
import ShowInStockCheckbox from "./ShowInStockCheckbox";

const SortAndFilter = ({
  onLowestRatedClick,
  onHighestRatedClick,
  onLowestPriceClick,
  onHighestPriceClick,
  onZtoAClick,
  onAtoZClick,
  filterQuery,
  setFilterQuery,
  filterQueryChanged,
  setFilterQueryChanged,
  sortActive,
  setSortBy,
  setSortOrder,
  setSortActive,
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
          onZtoAClick={onZtoAClick}
          onAtoZClick={onAtoZClick}
          sortActive={sortActive}
        />
      }
      <div className="filter-block">
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
          <ShowInStockCheckbox
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
            setFilterQueryChanged={setFilterQueryChanged}
          />
        }
      </div>
      {
        <ResetButton
          setFilterQuery={setFilterQuery}
          setFilterQueryChanged={setFilterQueryChanged}
          setSortBy={setSortBy}
          setSortOrder={setSortOrder}
          setSortActive={setSortActive}
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
  onZtoAClick: PropTypes.func.isRequired,
  onAtoZClick: PropTypes.func.isRequired,
  filterQuery: PropTypes.object,
  setFilterQuery: PropTypes.func,
  filterQueryChanged: PropTypes.bool.isRequired,
  setFilterQueryChanged: PropTypes.func.isRequired,
  sortActive: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  setSortActive: PropTypes.func.isRequired,
};

export default SortAndFilter;
