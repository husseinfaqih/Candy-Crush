import React from "react";
import PropTypes from "prop-types";

const Rating = ({ onLowestRatedClick, onHighestRatedClick }) => {
  return (
    <>
      <button onClick={onHighestRatedClick} style={{ margin: "5px" }}>
        Highest Rated
      </button>
      <button onClick={onLowestRatedClick} style={{ margin: "5px" }}>
        Lowest Rated
      </button>
    </>
  );
};

Rating.propTypes = {
  onLowestRatedClick: PropTypes.func.isRequired,
  onHighestRatedClick: PropTypes.func.isRequired,
};

export default Rating;
