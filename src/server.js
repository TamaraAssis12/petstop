// Importar dependencia
import express from "express";
import path from "path";
import { index, stop, stops, createStop, saveStop } from "./pages.js";

// console.log(pages);

// Iniciando o express

const __dirname = path.resolve();
const server = express();
server
  // Utilizando os arquivos estáticos
  .use(express.urlencoded({ extended: true }))

  // utilizando os arquivos estáticos
  .use(express.static("public"))

  // Configurar template engine
  .set("views", path.join(__dirname, "src/views"))
  .set("view engine", "hbs")

  // rotas da aplicação
  .get("/", index)
  .get("/stop", stop)
  .get("/stops", stops)
  .get("/create-stop", createStop)
  .post("/save-stop", saveStop);

// Ligando o servidor
server.listen(5500);
