import React from "react";
import PropTypes from "prop-types";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = ({ productRating }) => {
  const filledStar = <AiFillStar size={40} />;
  const emptyStar = <AiOutlineStar size={40} />;

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < productRating ? filledStar : emptyStar
  );

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  productRating: PropTypes.number.isRequired,
};

export default Rating;
