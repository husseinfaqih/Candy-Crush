import React from "react";
import PropTypes from "prop-types";

const ShowOnSaleCheckbox = ({
  filterQuery,
  setFilterQuery,
  setFilterQueryChanged,
}) => {
  const handleCheckboxChange = () => {
    setFilterQuery({ ...filterQuery, onSale: !filterQuery.onSale });
    setFilterQueryChanged(true);
  };

  return (
    <div className="on-sale-checkbox">
      <label>
        <input
          type="checkbox"
          checked={filterQuery.onSale}
          onChange={handleCheckboxChange}
        />
        Show On Sale Only
      </label>
    </div>
  );
};

ShowOnSaleCheckbox.propTypes = {
  filterQuery: PropTypes.object,
  setFilterQuery: PropTypes.func,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default ShowOnSaleCheckbox;
