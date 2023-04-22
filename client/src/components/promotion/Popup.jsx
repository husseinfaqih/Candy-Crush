import React from "react";
import PropTypes from "prop-types";

function Popup({ togglePopup }) {
  return (
    <div className="promotion-popup">
      <p>Here is whole information about promotion</p>
      <button onClick={togglePopup}>Close popup</button>
    </div>
  );
}

Popup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};

export default Popup;
