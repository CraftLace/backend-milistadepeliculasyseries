const express = require("express");
//create server
const app = express();
//usar cors
const cors = require("cors");
app.use(cors());
//usar json
app.use(express.json());
//usar wiston
const winston = require("winston");
app.use(express.urlencoded({ extended: true }));
//usar swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./openapi.json");
//rutas
const peliculasRoutes = require("./routes/peliculas.routes");
//create a logger
const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({
      format: winston.format.colorize({ all: true }),
    }),
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: "exceptions.log" }),
  ],
});
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
  .then(() => logger.info("Conectado a MongoDB"))
  .catch((err) => logger.error(err));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/peliculas", peliculasRoutes);
//crear ruta series y peliculas
//start server
app.listen(port, () => {
  logger.info(`Servidor en http://localhost:${port}`);
});
//end of file
