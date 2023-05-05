import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import multiply from "../../assets/multiply.png";

function Popup({ togglePopup }) {
  return (
    <div className="promotion-popup">
      <img
        className="promotion-popup-multiply"
        src={multiply}
        alt="multiply"
        onClick={togglePopup}
      />
      <p className="promotion-popup-text">
        Are you ready to treat yourself to a sweet tooth? Our sweet shop will
        delight you with an incredible 30% discount! Stock up on all your
        favorite treats, from Dolcetto Chocolate Filled Cookies to Zachary Candy
        Corn and more. In such a huge range of delicious treats, you are sure to
        find something that you like.
      </p>
      <p className="promotion-popup-text">
        But hurry, this offer will not last forever! Take advantage of our sale
        and treat yourself to something sweet today. Do not miss your chance to
        quench your thirst while saving big. Shop now and get ready to treat
        yourself to a huge discount! Follow the link to the page below and
        choose sweets only at a discount to get the maximum benefit
      </p>
      <Link className="promotion-popup-link" to="/products">
        Go shopping
      </Link>
    </div>
  );
}

Popup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};

export default Popup;
