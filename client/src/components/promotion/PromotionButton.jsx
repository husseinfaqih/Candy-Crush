import React from "react";
import PropTypes from "prop-types";

function PromotionButton({ togglePopup }) {
  return (
    <button className="promotion-button" onClick={togglePopup}>
      SHOP DEALS
    </button>
  );
}

PromotionButton.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};

export default PromotionButton;
