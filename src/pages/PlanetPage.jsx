import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { getPlanet } from "../services/api/planets";
import { Loading } from "../components/Loading";

export const PlanetPage = () => {
  const [planet, setPlanet] = useState({});

  const { planetId } = useParams();

  useEffect(() => {
    getPlanet(planetId).then((planet) => {
      setPlanet(planet);
    });
  }, [planetId]);

  return isEmpty(planet) ? (
    <Loading />
  ) : (
    <>
      {!isEmpty(planet) && (
        <div style={{ justifyItems: "center" }}>
          <h1>{planet.name}</h1>
          <div style={{ whiteSpace: "pre-wrap" }}>
            Population: {planet.population}
          </div>
        </div>
      )}
    </>
  );
};
