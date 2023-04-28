import React from "react";
import Categories from "./Categories";
import Price from "./Price";
import Rating from "./Rating";
import PropTypes from "prop-types";
import "./sortAndFilter.css";
import PriceSlider from "./PriceSlider";
import ShowOnSaleCheckbox from "./ShowOnSaleCheckbox";
import ResetButton from "./ResetButton";

const SortAndFilter = ({
  filterQuery,
  setFilterQuery,
  filterQueryChanged,
  setFilterQueryChanged,
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
      {
        <Categories
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          filterQueryChanged={filterQueryChanged}
          setFilterQueryChanged={setFilterQueryChanged}
        />
      }
      <h3 style={{ margin: "2px" }}>Prices filter</h3>
      {
        <PriceSlider
          filterQuery={filterQuery}
          setFilterQuery={setFilterQuery}
          setFilterQueryChanged={setFilterQueryChanged}
        />
      }
      <h3 style={{ margin: "2px" }}>Show products on sale</h3>
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
      <h3 style={{ margin: "2px" }}>Price Sort</h3>
      {<Price />}
      <h3 style={{ margin: "2px" }}>Rating Sort</h3>
      {<Rating />}
    </div>
  );
};

SortAndFilter.propTypes = {
  filterQuery: PropTypes.object,
  setFilterQuery: PropTypes.func,
  filterQueryChanged: PropTypes.bool.isRequired,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default SortAndFilter;
