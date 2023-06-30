import { Database } from "sqlite-async";
import path from "path";

const __dirname = path.resolve();

const databaseDir = path.join(__dirname, "src/database"); // Caminho para a pasta "database"

async function execute(db) {
  try {
    return await db.exec(`
      CREATE TABLE IF NOT EXISTS stops (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name_point TEXT,
        endereco TEXT,
        number_endereco TEXT,
        bairro TEXT,
        city TEXT,
        state TEXT,
        reference_point TEXT,
        images TEXT,
        type_point TEXT
      );
    `);
  } catch (error) {
    console.error("Erro ao executar a consulta no banco de dados:", error);
    throw error; // Lançar o erro novamente para que seja capturado externamente
  }


}

const dbPromise = Database.open(path.join(databaseDir, "database.sqlite"))
  .then(execute)
  .catch((error) => {
    console.error("Erro ao abrir o banco de dados:", error);
    throw error; // Lançar o erro novamente para que seja capturado externamente
  });

export default dbPromise;
