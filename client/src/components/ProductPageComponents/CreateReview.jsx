import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";

function CreateReview({ product }) {
  if (product._id === undefined) {
    return <></>;
  }
  const [reviewId, setReviewId] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { performFetch } = useFetch(`/review/${product._id}`, (response) => {
    setReviewId(response.result._id);
  });
  const [reviewerName, setReviewerName] = useState("");
  const [comment, setComment] = useState("");

  const handleShowForm = () => {
    setShowReviewForm(!showReviewForm);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    performFetch({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviewerName,
        rating: parseInt(product.rate),
        comment,
      }),
    });
    setReviewerName("");
    setComment("");
  };

  useEffect(() => {
    if (product) {
      setReviewId("");
      setShowReviewForm(false);
      performFetch();
    }
  }, [product]);

  return (
    <>
      {!showReviewForm && (
        <button className="create-review-leave-button" onClick={handleShowForm}>
          Leave review
        </button>
      )}
      {showReviewForm && (
        <div className="review-adding-block">
          {!reviewId ? (
            <form onSubmit={handleFormSubmit}>
              <div>
                <label className="review-adding-label">
                  Name:
                  <div></div>
                  <input
                    className="review-adding-text"
                    type="text"
                    value={reviewerName}
                    onChange={(event) => setReviewerName(event.target.value)}
                  />
                </label>
              </div>
              <div>
                <label className="review-adding-label">
                  Comment:
                  <div></div>
                  <textarea
                    className="review-adding-textarea"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                  ></textarea>
                </label>
              </div>
              <button className="review-adding-submit" type="submit">
                Submit
              </button>
            </form>
          ) : (
            <div className="review-adding-confirm">
              Thanks for leaving a review. Your review id number {reviewId}
            </div>
          )}
        </div>
      )}
    </>
  );
}

CreateReview.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CreateReview;
