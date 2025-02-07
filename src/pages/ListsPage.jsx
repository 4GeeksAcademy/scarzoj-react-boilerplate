import { Characters } from "../components/lists/CharacterList";
import { Planets } from "../components/lists/PlanetsList";
import { Starships } from "../components/lists/StarshipsList";

export const ListsPage = () => {
  return (
    <>
      <Characters />
      <Planets />
      <Starships />
    </>
  );
};
