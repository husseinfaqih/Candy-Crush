import React from "react";
import PropTypes from "prop-types";

const Price = ({ onHighestPriceClick, onLowestPriceClick }) => {
  return (
    <>
      <button onClick={onHighestPriceClick} style={{ margin: "5px" }}>
        Expensive First
      </button>
      <button onClick={onLowestPriceClick} style={{ margin: "5px" }}>
        Cheapest First
      </button>
    </>
  );
};

Price.propTypes = {
  onHighestPriceClick: PropTypes.func.isRequired,
  onLowestPriceClick: PropTypes.func.isRequired,
};

export default Price;
