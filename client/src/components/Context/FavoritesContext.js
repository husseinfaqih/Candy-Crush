import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const FavoritesContext = createContext([]);

export const useFavorites = () => {
  const [favorites, setFavorites] = useContext(FavoritesContext);

  const addFavorite = (item) => {
    setFavorites([...favorites, item]);
  };

  const removeFavorite = (item) => {
    setFavorites(favorites.filter((favorite) => favorite._id !== item._id));
  };

  const isFavorite = (item) => {
    return favorites.some((favorite) => favorite._id === item._id);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};

export const FavoritesProvider = (props) => {
  const favoritesState = useState([]);
  return (
    <FavoritesContext.Provider value={favoritesState}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
