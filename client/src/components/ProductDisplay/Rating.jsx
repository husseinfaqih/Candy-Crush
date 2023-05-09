import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = ({ productRating, product }) => {
  const filledStar = <AiFillStar size={40} />;
  const emptyStar = <AiOutlineStar size={40} />;

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < productRating ? filledStar : emptyStar
  );

  const [rating, setRating] = useState(product.rate);

  const { performFetch } = useFetch(
    `/product/rate/${product._id}?rating=${rating}`
  );

  const updateRating = (index) => {
    const newRating = Math.round((product.rate + index) / 2);
    setRating(newRating);

    performFetch({
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    });
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
