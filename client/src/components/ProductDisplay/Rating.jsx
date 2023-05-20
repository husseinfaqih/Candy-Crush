import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./Rating.css";

const Rating = ({ productRating, product }) => {
  const [rating, setRating] = useState(product.rate);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedRating, setSelectedRating] = useState(0);

  const filledStar = <AiFillStar size={40} />;
  const emptyStar = <AiOutlineStar size={40} />;
  const hoverStar = <AiFillStar size={40} className="hover-star" />;

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < productRating ? filledStar : emptyStar
  );

  const { performFetch } = useFetch(
    `/product/rate/${product._id}?rating=${rating}`
  );

  const updateRating = (index) => {
    const newRating = (product.rate + index) / 2;
    setRating(newRating);
    setSelectedRating(index);

    performFetch({
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    });
  };

  const handleStarHover = (index) => {
    setHoveredIndex(index);
  };

  const handleStarLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div>
      {stars.map((star, index) => (
        <span
          key={index}
          onClick={() => updateRating(index + 1)}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={() => handleStarLeave()}
        >
          {index <= (hoveredIndex >= 0 ? hoveredIndex : selectedRating - 1)
            ? hoverStar
            : star}
        </span>
      ))}
      {selectedRating > 0 && (
        <p className="thanks-rating">
          Thank you for your rating! You&apos;ve selected {selectedRating}{" "}
          star(s) for this product. Your feedback is greatly appreciated and
          will help us improve our services.
        </p>
      )}
    </div>
  );
};

Rating.propTypes = {
  productRating: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
};

export default Rating;
