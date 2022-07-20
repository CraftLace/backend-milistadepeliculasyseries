const express = require("express");
const router = express.Router();
const Pelicula = require("../models/pelicula.models");
const peliculasaxios = require("./peliculaaxios.js");

//GET: GET ALL MOVIES

router.get("/", async (req, res) => {
  const tree = await peliculasaxios.getPeliculas();
  Pelicula.find().then((respeliculas) => res.send("tree"));
});

//POST: CREATE A MOVIE
router.post("/", (req, res) => {
  const {
    adult,
    backdrop_path,
    status,
    belongs_to_collection,
    budget,
    genres,
    homepage,
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
  } = req.body;
  const pelicula = new Pelicula({
    adult,
    backdrop_path,
    status,
    belongs_to_collection,
    budget,
    genres,
    homepage,
    id,
    imdb_id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    production_companies,
    production_countries,
  });
  pelicula
    .save()
    .then((respelicula) => res.send(respelicula))
    .catch((error) => {
      res.status(500).send("Error del servidor");
    });
});

module.exports = router;
