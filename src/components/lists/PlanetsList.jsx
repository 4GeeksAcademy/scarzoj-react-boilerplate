import { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router";
import { isEmpty } from "lodash";

import { FavoritesContext } from "../../context/Favorites";
import { getPlanets } from "../../services/api/planets";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const { favorites, addToFavorites, deleteFavorite } =
    useContext(FavoritesContext);

  useEffect(() => {
    getPlanets().then((planets) => {
      setPlanets(planets);
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
      <h1>Planets</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {!isEmpty(planets) &&
          planets.map((planet) => {
            return (
              <div key={planet.id} style={{ margin: "16px" }}>
                <h3>{planet.name}</h3>
                <NavLink to={`planets/${planet.id}`}>
                  <Button>View More</Button>
                </NavLink>
                <Button
                  onClick={() => {
                    isFavorited(planet.id, "planets")
                      ? deleteFavorite(planet.id, "planets")
                      : addToFavorites(planet.id, planet.name, "planets");
                  }}
                >
                  {isFavorited(planet.id, "planets") ? "Unfav" : "Fav"}
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
