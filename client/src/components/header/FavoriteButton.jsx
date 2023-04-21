import React from "react";
import favorites from "../../assets/favorites.svg";
import { Link } from "react-router-dom";

function FavoriteButton() {
  return (
    <Link to="/favorite" className="header-favorites-button">
      <img
        className="header-favorites-button-image"
        src={favorites}
        alt="favorites"
      />
    </Link>
  );
}

export default FavoriteButton;
