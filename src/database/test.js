// // const saveStop = require("./saveStop");
// import { Database } from "sqlite-async";


// Database.then(async (db) => {

//   // Executa a consulta SQL para inserir o campo na tabela
//   await db.run(`INSERT INTO stops (bairro) VALUES (TEXT)`);

//   //  inserir dados na tabela
//   // await db.run(`
//   //     INSERT INTO stops (
//   //         lat,
//   //         lng,
//   //         name_point,
//   //         endereco,
//   //         number_endereco,
//   //         city,
//   //         state,
//   //         reference_point,
//   //         images,
//   //         type_point
//   //     ) VALUES (
//   //         "-23.550520",
//   //         "-46.633309",
//   //         "Stop Mumbuca",
//   //         "Av. Brigadeiro Faria Lima",
//   //         "1811",
//   //         "Maricá",
//   //         "Rj",
//   //         "Ao lado do Charque",
//   //         "https://images.unsplash.com/photo-1581093458791-9b9f8d7a5c3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0YXBhJTIwY2FyJTIwYmF0YXBhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
//   //         "Ponto de Alimentação"
//   //     );

//   // `)

//   // inserir dados na tabela

//   // await saveStop(db, {
//   //   lat: "-27.222633",
//   //   lng: "-49.6555874",
//   //   name_point: "PetStop Mumbuca",
//   //   endereco: "Rua Guilherme Gembala",
//   //   number_endereco: "260",
//   //   bairro: "Mumbuca",
//   //   city: "Maricá",
//   //   state: "Rj",
//   //   reference_point: "Ao lado do Charque",
//   //   images: [
//   //     "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

//   //     "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
//   //   ].toString(),
//   //   type_point: "Ponto de Alimentação",
//   // });

//   // consultar dados na tabela
//   const selectedStops = await db.all("SELECT * FROM stops");
//   console.log(selectedStops);

//   // // consultar somente 1 ponto, pelo id
//   const stops = await db.all('SELECT * FROM stops WHERE id = "2"');
//   console.log(stops);

  

//   // // deletar dado da tabela
//   // console.log(await db.run("DELETE FROM stops WHERE id = '4'"))
//   // console.log(await db.run("DELETE FROM stops WHERE id = '5'"))
// });
