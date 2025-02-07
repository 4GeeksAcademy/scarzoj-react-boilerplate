import { createContext, useContext, useEffect, useState } from "react";
import {
  getUserFavourites,
  postUserFavourite,
  deleteUserFavourite,
} from "../services/api/users";
import { UserContext } from "./User";

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
  deleteFavorite: (id) => {},
  addToFavorites: (id, name, type) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(UserContext);
  const userId = user.id;

  const refreshFavourites = (userId) => {
    getUserFavourites(userId).then((data) => {
      setFavorites(data);
    });
  };

  const deleteFavorite = (externalId, type) => {
    const favoriteId = favorites.find((favorite) => {
      return favorite.type === type && favorite.external_id === externalId;
    }).id;
    deleteUserFavourite(userId, favoriteId).then(() => {
      refreshFavourites(userId);
    });
  };

  const addToFavorites = (externalId, name, type) => {
    postUserFavourite(userId, externalId, name, type).then(() => {
      refreshFavourites(userId);
    });
  };

  useEffect(() => {
    refreshFavourites(userId);
  }, [userId]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, addToFavorites, deleteFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
