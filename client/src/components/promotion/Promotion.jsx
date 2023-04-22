import React, { useState } from "react";
import PromotionTitle from "./PromotionTitle";
import PromotionButton from "./PromotionButton";
import PromotionImage from "./PromotionImage";
import "./promotion.css";
import Popup from "./Popup";

function Promotion() {
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  return (
    <div className="promotion">
      <div className="promotion-main-container">
        <PromotionTitle />
        <PromotionButton togglePopup={togglePopup} />
      </div>
      <PromotionImage />
      {showPopup && (
        <div className="popup">
          <Popup togglePopup={togglePopup} />
        </div>
      )}
    </div>
  );
}

export default Promotion;
