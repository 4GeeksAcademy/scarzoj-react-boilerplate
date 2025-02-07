import { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router";
import { isEmpty } from "lodash";

import { FavoritesContext } from "../../context/Favorites";
import { getStarships } from "../../services/api/starships";

export const Starships = () => {
  const [starships, setstarships] = useState([]);
  const { favorites, addToFavorites, deleteFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    getStarships().then((starships) => {
      setstarships(starships);
    });
  }, []);

  const isFavorited = (id, type) => {
    return (
      !isEmpty(favorites) &&
      favorites.some((favorite) => {
        return favorite.external_id === id && favorite.type === type;
      })
    );
  };

  return (
    <div style={{ border: "solid grey" }}>
      <h1>Starships</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {!isEmpty(starships) &&
          starships.map((starship) => {
            return (
              <div key={starship.uid} style={{ margin: "16px" }}>
                <h3>{starship.name}</h3>
                <NavLink to={`starships/${starship.id}`}>
                  <Button>View More</Button>
                </NavLink>
                <Button
                  onClick={() => {
                    isFavorited(starship.id, "starships")
                      ? deleteFavorite(starship.id, "starships")
                      : addToFavorites(starship.id, starship.name, "starships");
                  }}
                >
                  {isFavorited(starship.id, "starships") ? "Unfav" : "Fav"}
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
