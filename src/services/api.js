export const baseUrl =
  "https://opulent-succotash-v6vwg4qv6462656-8080.app.github.dev/";

export const usersUrl = "users/";
export const charactersUrl = "characters/";
export const planetsUrl = "planets/";
export const starshipsUrl = "starships/";

export const fetchWrapper = async (input, init) => {
  return await fetch(input, init)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText || response.status);
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
