import { createContext, useContext, useEffect, useState } from "react";
import {
  getUserFavourites,
  postUserFavourite,
  deleteUserFavourite,
} from "../services/api/users";
import { UserContext } from "./User";
import { isEmpty } from "lodash";

export const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
  deleteFavorite: (id) => {},
  addToFavorites: (id, name, type) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(UserContext);

  const refreshFavourites = () => {
    getUserFavourites().then((data) => {
      setFavorites(data);
    });
  };

  const deleteFavorite = (externalId, type) => {
    const favoriteId = favorites.find((favorite) => {
      return favorite.type === type && favorite.external_id === externalId;
    }).id;
    deleteUserFavourite(favoriteId).then(() => {
      refreshFavourites();
    });
  };

  const addToFavorites = (externalId, name, type) => {
    postUserFavourite(externalId, name, type).then(() => {
      refreshFavourites();
    });
  };

  useEffect(() => {
    if (!isEmpty(user)) {
      refreshFavourites();
    }
  }, [user]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, addToFavorites, deleteFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
