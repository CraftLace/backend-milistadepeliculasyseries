const express = require("express");
//create server
const app = express();
//create port
const port = process.env.PORT || 3000;
require("dotenv").config();
//create route
app.get("/", (req, res) => res.send("Hola Mundo!"));
//conectarse a mongo
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log(err));
//start server
app.listen(port, () =>
  console.log(`App de ejemplo en el puerto http://localhost:${port}!`)
);
//end of file
