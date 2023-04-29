import React from "react";
import PropTypes from "prop-types";

const ShowInStockCheckbox = ({
  filterQuery,
  setFilterQuery,
  setFilterQueryChanged,
}) => {
  const handleCheckboxChange = () => {
    setFilterQuery({ ...filterQuery, inStock: !filterQuery.inStock });
    setFilterQueryChanged(true);
  };

  return (
    <div className="in-stock-checkbox">
      <label>
        <input
          type="checkbox"
          checked={filterQuery.inStock}
          onChange={handleCheckboxChange}
        />
        Show In Stock Only
      </label>
    </div>
  );
};

ShowInStockCheckbox.propTypes = {
  filterQuery: PropTypes.object,
  setFilterQuery: PropTypes.func,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default ShowInStockCheckbox;
