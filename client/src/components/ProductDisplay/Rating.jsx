import React from "react";
import PropTypes from "prop-types";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = ({ productRating, product }) => {
  const filledStar = <AiFillStar size={40} />;
  const emptyStar = <AiOutlineStar size={40} />;

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < productRating ? filledStar : emptyStar
  );

  const updateRating = (index) => {
    const newRating = Math.round((product.rate + index) / 2);
    // eslint-disable-next-line no-console
    console.log("Old Rating:", product.rate);
    // eslint-disable-next-line no-console
    console.log("Clicked star index:", index);
    // eslint-disable-next-line no-console
    console.log("new Rating:", newRating);
  };

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index} onClick={() => updateRating(index + 1)}>
          {star}
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  productRating: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};

export default Rating;
