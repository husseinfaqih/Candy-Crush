import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

import { Link } from "react-router-dom";

function FavoriteButton() {
  return (
    <Link to="/favorite" className="header-favorites-button">
      <AiOutlineHeart className="header-favorites-button-image" size={40} />
    </Link>
  );
}

export default FavoriteButton;
