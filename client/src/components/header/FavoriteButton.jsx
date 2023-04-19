import React from "react";
import favorites from "../../assets/favorites.svg";

function FavoriteButton() {
  return (
    <img className="header-favorites-button" src={favorites} alt="favorites" />
  );
}

export default FavoriteButton;
