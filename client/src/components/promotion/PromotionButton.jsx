import React from "react";
import PropTypes from "prop-types";

function PromotionButton({ togglePopup }) {
  return (
    <button className="promotion-button" onClick={togglePopup}>
      shop deals
    </button>
  );
}

PromotionButton.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};

export default PromotionButton;
