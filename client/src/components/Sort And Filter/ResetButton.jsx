import React from "react";
import PropTypes from "prop-types";

const ResetButton = ({ setFilterQuery, setFilterQueryChanged }) => {
  const handleResetClick = () => {
    setFilterQuery({
      categories: "all",
      minPrice: 0,
      maxPrice: 200,
      onSale: false,
    });
    setFilterQueryChanged(true);
  };

  return (
    <button className="filter-reset-button" onClick={handleResetClick}>
      Reset Filters
    </button>
  );
};

ResetButton.propTypes = {
  setFilterQuery: PropTypes.func,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default ResetButton;
