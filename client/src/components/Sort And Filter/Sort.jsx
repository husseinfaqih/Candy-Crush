import React from "react";
import PropTypes from "prop-types";

const Sort = ({
  onLowestPriceClick,
  onHighestPriceClick,
  onLowestRatedClick,
  onHighestRatedClick,
}) => {
  const sortingOptions = [
    { label: "IN STOCK", onClick: null },
    { label: "ON SALE", onClick: null },
    { label: "BEST SELLING", onClick: null },
    { label: "RATE/ HIGH TO LOW", onClick: onHighestRatedClick },
    { label: "RATE/ LOW TO HIGH", onClick: onLowestRatedClick },
    { label: "SORT A TO Z", onClick: null },
    { label: "SORT Z TO A", onClick: null },
    { label: "PRICE/ HIGH TO LOW", onClick: onHighestPriceClick },
    { label: "PRICE/ LOW TO HIGH", onClick: onLowestPriceClick },
  ];

  return (
    <div className="sorting-div">
      {sortingOptions.map(({ label, onClick }) => (
        <button className="sorting-button" key={label} onClick={onClick}>
          {label}
        </button>
      ))}
    </div>
  );
};

Sort.propTypes = {
  onLowestPriceClick: PropTypes.func.isRequired,
  onHighestPriceClick: PropTypes.func.isRequired,
  onLowestRatedClick: PropTypes.func.isRequired,
  onHighestRatedClick: PropTypes.func.isRequired,
};

export default Sort;
