import React from "react";
import PropTypes from "prop-types";

const Sort = ({
  onLowestPriceClick,
  onHighestPriceClick,
  onLowestRatedClick,
  onHighestRatedClick,
  onZtoAClick,
  onAtoZClick,
  sortActive,
}) => {
  const sortingOptions = [
    { label: "RATE/ HIGH TO LOW", onClick: onHighestRatedClick },
    { label: "RATE/ LOW TO HIGH", onClick: onLowestRatedClick },
    { label: "SORT A TO Z", onClick: onAtoZClick },
    { label: "SORT Z TO A", onClick: onZtoAClick },
    { label: "PRICE/ HIGH TO LOW", onClick: onHighestPriceClick },
    { label: "PRICE/ LOW TO HIGH", onClick: onLowestPriceClick },
  ];

  return (
    <div className="sorting-div">
      {sortingOptions.map(({ label, onClick }) => (
        <button
          className={
            label === sortActive
              ? "sorting-button sorting-active"
              : "sorting-button"
          }
          key={label}
          onClick={onClick}
        >
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
  onZtoAClick: PropTypes.func.isRequired,
  onAtoZClick: PropTypes.func.isRequired,
  sortActive: PropTypes.string.isRequired,
};

export default Sort;
