import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PriceSlider = ({
  filterQuery,
  setFilterQuery,
  setFilterQueryChanged,
}) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(200);

  const handleMinChange = (event) => {
    setMinValue(Number(event.target.value));
    setFilterQueryChanged(true);
  };

  const handleMaxChange = (event) => {
    setMaxValue(Number(event.target.value));
    setFilterQueryChanged(true);
  };

  useEffect(() => {
    setFilterQuery({ ...filterQuery, minPrice: minValue, maxPrice: maxValue });
  }, [minValue, maxValue]);

  return (
    <div className="price-slider">
      <div>
        <label htmlFor="min">Min:</label>
        <input
          id="min"
          type="number"
          min={0}
          max={200}
          value={filterQuery.minPrice}
          onChange={handleMinChange}
        />
      </div>
      <div>
        <label htmlFor="max">Max:</label>
        <input
          id="max"
          type="number"
          min={0}
          max={200}
          value={filterQuery.maxPrice}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};

PriceSlider.propTypes = {
  filterQuery: PropTypes.object,
  setFilterQuery: PropTypes.func,
  setFilterQueryChanged: PropTypes.func.isRequired,
};

export default PriceSlider;
