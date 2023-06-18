// Importar dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// console.log(pages);

// Iniciando o express
const server = express();
server
  // Utilizando os arquivos estáticos
  .use(express.static("public"))

  // Configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // rotas da aplicação
  .get("/", pages.index)
  .get("/stop", pages.stop)
  .get("/stops", pages.stops)
  .get("/create-stop", pages.createStop)
  

// Ligando o servidor
server.listen(5500);
