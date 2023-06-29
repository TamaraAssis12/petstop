// server.js
import express from "express";
import path from "path";
import { uploadStops }   from "../middlewares/uploadImages.js";
import { index, stop, stops, createStop, saveStop, login, signup } from "./pages.js";


// console.log(pages);
// Iniciando o express

const __dirname = path.resolve();
const server = express();

server

  .post("/upload-images", uploadStops.single("images"), async (req, res) => { 

    // Verifique se existem arquivos na requisição
    if (!req.file) {      
      return res.status(400).json({
        erro: true,
        message: "Erro ao enviar imagem"
      });

    }

    return res.json({
      erro: false,
      message: "Imagem enviada com sucesso"
    });
  })

  // Utilizando os arquivos estáticos
  .use(express.urlencoded({ extended: true }))

  // utilizando os arquivos estáticos
  .use(express.static("public"))
  .use('/uploads', express.static('uploads'))


  // Configurar template engine
  .set("views", path.join(__dirname, "src/views"))
  .set("view engine", "hbs")

  // rotas da aplicação
  .get("/", index)
  .get("/stop", stop)
  .get("/stops", stops)
  .get("/create-stop", createStop)
  .get("/login", login)
  .get("/signup", signup)
  .post("/save-stop", saveStop);

// Ligando o servidor
server.listen(5500);
