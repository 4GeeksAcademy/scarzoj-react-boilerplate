import { baseUrl, fetchWrapper, planetsUrl } from "../api";

const planetsEndpoint = `${baseUrl}${planetsUrl}`;

export const getPlanets = async () => {
  return await fetchWrapper(planetsEndpoint).then((data) => {
    return data;
  });
};

export const getPlanet = async (filmId) => {
  return await fetchWrapper(`${planetsEndpoint}${filmId}`).then((data) => {
    return data;
  });
};
