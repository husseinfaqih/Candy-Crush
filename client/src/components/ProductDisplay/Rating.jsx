import React from "react";
import PropTypes from "prop-types";

import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Rating = ({ productRating }) => {
  function ratingSystem(rating) {
    {
      if (rating == 1) {
        return (
          <div>
            <AiFillStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
          </div>
        );
      }
      if (rating == 2) {
        return (
          <div>
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
          </div>
        );
      }

      if (rating == 3) {
        return (
          <div>
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
          </div>
        );
      }
      if (rating == 4) {
        return (
          <div>
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiOutlineStar size={40} />
          </div>
        );
      }
      if (rating == 5) {
        return (
          <div>
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
            <AiFillStar size={40} />
          </div>
        );
      } else {
        return (
          <div>
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
            <AiOutlineStar size={40} />
          </div>
        );
      }
    }
  }

  return <div>{ratingSystem(productRating)}</div>;
};

Rating.propTypes = {
  productRating: PropTypes.number.isRequired,
};

export default Rating;
