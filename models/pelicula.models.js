const { Schema, model } = require("mongoose");
//pelicula schema
const peliculaSchema = new Schema({
  adult: {
    type: "Boolean",
  },
  backdrop_path: {
    type: "String",
  },
  status: {
    type: "String",
  },
  belongs_to_collection: {
    id: {
      type: "Number",
    },
    name: {
      type: "String",
    },
    poster_path: {
      type: "String",
    },
    backdrop_path: {
      type: "String",
    },
  },
  budget: {
    type: "Number",
  },
  genres: {
    type: ["Mixed"],
  },
  homepage: {
    type: "String",
  },
  id: {
    type: "Number",
  },
  imdb_id: {
    type: "String",
  },
  original_language: {
    type: "String",
  },
  original_title: {
    type: "String",
  },
  overview: {
    type: "String",
  },
  popularity: {
    type: "Number",
  },
  poster_path: {
    type: "String",
  },
  production_companies: {
    type: ["Mixed"],
  },
  production_countries: {
    type: ["Mixed"],
  },
  release_date: {
    type: "Date",
  },
  revenue: {
    type: "Number",
  },
  runtime: {
    type: "Number",
  },
  spoken_languages: {
    type: ["Mixed"],
  },
  status: {
    type: "String",
  },
  tagline: {
    type: "String",
  },
  title: {
    type: "String",
  },
  video: {
    type: "Boolean",
  },
  vote_average: {
    type: "Number",
  },
  vote_count: {
    type: "Number",
  },
});

module.exports = model("pelicula", peliculaSchema);
