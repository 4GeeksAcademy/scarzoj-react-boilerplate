import { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router";
import { isEmpty } from "lodash";

import { FavoritesContext } from "../../context/Favorites";
import { getCharactersList } from "../../services/api/characters";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const { favorites, addToFavorites, deleteFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    getCharactersList().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  const isFavorited = (id, type) => {
    return favorites.some((favorite) => {
      return favorite.external_id === id && favorite.type === type;
    });
  };

  return (
    <div style={{ border: "solid grey" }}>
      <h1>Characters</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {!isEmpty(characters) &&
          characters.map((character) => {
            return (
              <div key={character.id} style={{ margin: "16px" }}>
                <h3>{character.name}</h3>
                <NavLink to={`characters/${character.id}`}>
                  <Button>View More</Button>
                </NavLink>
                <Button
                  onClick={() => {
                    isFavorited(character.id, "characters")
                      ? deleteFavorite(character.id, "characters")
                      : addToFavorites(
                          character.id,
                          character.name,
                          "characters",
                        );
                  }}
                >
                  {isFavorited(character.id, "characters") ? "Unfav" : "Fav"}
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
