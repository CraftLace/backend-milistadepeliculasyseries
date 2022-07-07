const express = require("express");
//create server
const app = express();
//create port
const port = 3000 || process.env.PORT;
//create route
app.get("/", (req, res) => res.send("Hola Mundo!"));
//start server
app.listen(port, () =>
  console.log(`App de ejemplo en el puerto http://localhost:${port}!`)
);
//end of file
