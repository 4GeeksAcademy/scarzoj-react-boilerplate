import { baseUrl, fetchWrapper, charactersUrl } from "../api";

const charactersEndpoint = `${baseUrl}${charactersUrl}`;

export const getCharactersList = async () => {
  return await fetchWrapper(charactersEndpoint).then((data) => {
    return data;
  });
};

export const getCharacter = async (speciesId) => {
  return await fetchWrapper(`${charactersEndpoint}${speciesId}`).then(
    (data) => {
      return data;
    },
  );
};
