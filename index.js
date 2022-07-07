const express = require("express");
//create server
const app = express();
//create port
const port = process.env.PORT || 3000;
//create route
app.get("/", (req, res) => res.send("Hola Mundo!"));
//start server
let url = process.env.api_key_tmdb;
app.listen(port, () =>
  console.log(`App de ejemplo en el puerto http://localhost:${port}!`)
);
//end of file
