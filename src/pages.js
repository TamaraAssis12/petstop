const Database = require("./database/db");
const saveStop = require("./database/saveStop");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async stop(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(`SELECT * FROM stops WHERE id = "${id}"`);
      const stop = results[0];

      stop.images = stop.images.split(",");
      stop.firstImage = stop.images[0];

      if (stop.open_on_weekends == "0") {
        stop.open_on_weekends = false;
      } else {
        stop.open_on_weekends = true;
      }

      return res.render("stop", { stop });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  async stops(req, res) {
    try {
      const db = await Database;
      const stops = await db.all("SELECT * FROM stops");
      return res.render("stops", { stops });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  createStop(req, res) {
    return res.render("create-stop");
  },

  async saveStop(req, res) {
    const fields = req.body;

    // validar se todos os campos estão preenchidos
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }

    try {
      // salvar um ponto
      const db = await Database;
      await saveStop(db, {
        lat: fields.lat,
        lng: fields.lng,
        name_point: fields.name_point,
        endereco: fields.endereco,
        number_endereco: fields.number_endereco,
        city: fields.city,
        state: fields.state,
        reference_point: fields.reference_point,
        images: fields.images,
        type_point: fields.type_point,
      });

      // redirecionamento
      return res.redirect("/stops");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};
