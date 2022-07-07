# backend-milistadepeliculasyseries

Lista de Dependencias necesarias

- Express
- Dotenv
- swagger-jsdoc
- swagger-ui-express
- mongoose

## Crear servidor

1. Creamos el archivo index
2. Llamamos a las librerias express
3. Iniciamos un servidor

```js
const express = require("express");
//create server
const app = express();
//create port
const port = 3000;
//create route
app.get("/", (req, res) => res.send("Hola Mundo!"));
//start server
app.listen(port, () => console.log(`App de ejemplo en el puerto ${port}!`));
//end of file
```

4. En el package le agregamos el sigueinte comando "dev": "nodemon index.js",
5. en la terminal ejecutamos npm run dev y abrimos el puerto
6. Servidor basico funcioando
7. agregar "start": "node index.js"
8. subirlo a heroku
   git push heroku main
