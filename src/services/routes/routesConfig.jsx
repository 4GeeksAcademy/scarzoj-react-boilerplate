import { ListsPage } from "../../pages/ListsPage";
import { CharacterPage } from "../../pages/CharacterPage";
import { PlanetPage } from "../../pages/PlanetPage";
import { StarshipPage } from "../../pages/StarshipPage";
import { LoginPage } from "../../pages/LoginPage";

export const routesConfig = [
  {
    name: "Root",
    path: "/",
    component: <ListsPage />,
  },
  {
    name: "Login",
    path: "/login",
    component: <LoginPage />,
  },
  {
    name: "Characters",
    path: "/characters/:characterId",
    component: <CharacterPage />,
  },
  {
    name: "Planets",
    path: "/planets/:planetId",
    component: <PlanetPage />,
  },
  {
    name: "Starship",
    path: "/starships/:starshipId",
    component: <StarshipPage />,
  },
  {
    name: "All",
    path: "*",
    component: <ListsPage />,
  },
];
