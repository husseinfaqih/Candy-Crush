import React from "react";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useFavorites } from "../Context/FavoritesContext";
import PropTypes from "prop-types";

const FavoriteIcon = ({ product }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = product && favorites.some((p) => p._id === product._id);

  const handleClick = () => {
    if (isFavorite) {
      removeFavorite(product);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div onClick={handleClick}>
      {isFavorite ? <MdFavorite size={40} /> : <MdFavoriteBorder size={40} />}
    </div>
  );
};
FavoriteIcon.propTypes = {
  product: PropTypes.object,
};
export default FavoriteIcon;
