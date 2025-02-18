import dbPromise from "./database/db.js";
import { saveStopDB } from "./database/saveStop.js";



export const index = (req, res) => {
  return res.render("index");
};

export const stop = async (req, res) => {
  const id = req.query.id;

  try {
    const db = await dbPromise;
    const results = await db.all(`SELECT * FROM stops WHERE id = "${id}"`);
    console.log(results[0]);

    const stop = results[0];

    stop.images = stop.images.split(",");
    stop.firstImage = stop.images[0];

    // if (stop.open_on_weekends == "0") { 
    //   stop.open_on_weekends = false;
    // } else {
    //   stop.open_on_weekends = true;
    // }

    return res.render("stop", { stop });
  } catch (error) {
    console.log(error);
    return res.send("Erro no banco de dados!");
  }
};

export const stops = async (req, res) => {
  try {
    const db = await dbPromise;
    const stops = await db.all("SELECT * FROM stops");
    return res.render("stops", { stops });
  } catch (error) {
    console.log(error);
    return res.send("Erro no banco de dados!");
  }
};

export const createStop = (req, res) => {
  return res.render("create-stop");
};

export const saveStop = async (req, res) => {
  const fields = req.body;
  const uploadedImages = JSON.parse(fields.uploadedImages || "[]");


  // validar se todos os campos estão preenchidos
  if (Object.values(fields).includes("")) {
    return res.send("Todos os campos devem ser preenchidos!");
  }


  try {
    // salvar um ponto
    const db = await dbPromise;
    await saveStopDB(db, {
      lat: fields.lat,
      lng: fields.lng,
      name_point: fields.name_point,
      endereco: fields.endereco,
      number_endereco: fields.numero,
      bairro: fields.bairro,
      city: fields.cidade,
      state: fields.estado,
      reference_point: fields.about,
      images: fields.images,
      type_point:fields.pha,
    });

    // redirecionamento
    return res.redirect("/stops");
  } catch (error) {
    console.log(error);
    return res.send("Erro no banco de dados!");
  }
};

// Configurar uma rota post para lidar com o envio da imagem.
// Essa rota deve receber a imagem, salvar no servidor e retornar a imagem para o front-end.



//Login
export const login = (req, res) => {
  return res.render("login");
}

export const loginPost = (req, res) => {
  const fields = req.body;

  // validar se todos os campos estão preenchidos
  if (Object.values(fields).includes("")) {
    return res.send("Todos os campos devem ser preenchidos!");
  }

  // validar se a senha está correta
  if (fields.password !== "123") {
    return res.send("Senha incorreta!");
  }

  // redirecionamento
  return res.redirect("/stops");
}

//Signup - Cadastro
export const signup = (req, res) => {
  return res.render("signup");
}

export const signupPost = (req, res) => {
  const fields = req.body;

  // validar se todos os campos estão preenchidos
  if (Object.values(fields).includes("")) {
    return res.send("Todos os campos devem ser preenchidos!");
  }

  // validar se a senha está correta
  if (fields.password !== fields.password2) {
    return res.send("As senhas não são iguais!");
  }

  // redirecionamento
  return res.redirect("/stops");
}
