import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";

function ShowReview({ product }) {
  const [randomReview, setRandomReview] = useState(null);
  const { performFetch } = useFetch(`/review/${product._id}`, (response) => {
    setRandomReview(selectRandomReview(response.result));
  });

  useEffect(() => {
    if (product._id !== undefined) {
      performFetch();
    }
  }, [product._id]);

  const selectRandomReview = (reviews) => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    return reviews[randomIndex];
  };

  return (
    <div className="show-review-block">
      {randomReview && (
        <div>
          <h3 className="show-review-title">Random product review</h3>
          <div className="show-review-name">
            Reviewer Name: {randomReview.reviewerName}
          </div>
          <div></div>
          <div className="show-review-comment">
            Comment: {randomReview.comment}
          </div>
        </div>
      )}
    </div>
  );
}

ShowReview.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ShowReview;
