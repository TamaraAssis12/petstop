function saveStopDB(db, stop) {
  return db.run(`
      INSERT INTO stops (
        lat,
        lng,
        name_point,
        endereco,
        number_endereco,
        bairro,
        city,
        state,
        reference_point,
        images,
        type_point
      ) VALUES (
          "${stop.lat}",
          "${stop.lng}",
          "${stop.name_point}",
          "${stop.endereco}",
          "${stop.number_endereco}",
          "${stop.bairro}",
          "${stop.city}",
          "${stop.state}",
          "${stop.reference_point}",
          "${stop.images}",
          "${stop.type_point}"
      );
  `);
}

export { saveStopDB };
