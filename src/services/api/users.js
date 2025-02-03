import { baseUrl, fetchWrapper, usersUrl } from "../api";

const usersEndpoint = `${baseUrl}${usersUrl}`;

export const getUsers = async () => {
  return await fetchWrapper(usersEndpoint).then((data) => {
    return data;
  });
};

export const getUser = async (userId) => {
  return await fetchWrapper(`${usersEndpoint}${userId}`).then((data) => {
    return data;
  });
};

export const getUserFavourites = async (userId) => {
  return await fetchWrapper(`${usersEndpoint}${userId}/favourites`).then(
    (data) => {
      return data;
    },
  );
};

export const postUserFavourite = async (userId, externalId, name, type) => {
  return await fetchWrapper(`${usersEndpoint}${userId}/favourites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      external_id: externalId,
      name: name,
      type: type,
    }),
  }).then((data) => {
    return data;
  });
};

export const deleteUserFavourite = async (userId, favouriteId) => {
  return await fetchWrapper(`${usersEndpoint}${userId}/favourites`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: favouriteId,
    }),
  }).then((data) => {
    return data;
  });
};
