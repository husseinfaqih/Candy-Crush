import React from "react";
import PropTypes from "prop-types";

const ResetButton = ({
  setFilterQuery,
  setFilterQueryChanged,
  setSortBy,
  setSortOrder,
  setSortActive,
}) => {
  const handleResetClick = () => {
    setFilterQuery({
      categories: "all",
      minPrice: 0,
      maxPrice: 200,
      onSale: false,
      inStock: false,
    });
    setFilterQueryChanged(true);
    setSortBy("");
    setSortOrder("");
    setSortActive("");
  };

  return (
    <button className="filter-reset-button" onClick={handleResetClick}>
      Reset all Filters and Sorts
    </button>
  );
};

ResetButton.propTypes = {
  setFilterQuery: PropTypes.func,
  setFilterQueryChanged: PropTypes.func.isRequired,
  setSortBy: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  setSortActive: PropTypes.func.isRequired,
};

export default ResetButton;
