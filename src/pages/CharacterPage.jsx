import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Loading } from "../components/Loading";

import { getCharacter } from "../services/api/characters";

export const CharacterPage = () => {
  const [character, setSpecies] = useState({});

  const { characterId } = useParams();

  useEffect(() => {
    getCharacter(characterId).then((character) => {
      setSpecies(character);
    });
  }, [characterId]);

  return isEmpty(character) ? (
    <Loading />
  ) : (
    <>
      {!isEmpty(character) && (
        <div style={{ justifyItems: "center" }}>
          <h1>{character.name}</h1>
          <div>Home World: {character.home_world.name}</div>
        </div>
      )}
    </>
  );
};
