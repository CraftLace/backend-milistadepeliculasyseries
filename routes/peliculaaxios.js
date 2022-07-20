const axios = require("axios");
const getPeliculas = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/movie/268?api_key=${process.env.API_KEY_TMDB}"
  );
  return response.data.results;
};
module.exports = { getPeliculas };
