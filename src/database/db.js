const Database = require('sqlite-async');


function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS stops (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name_point TEXT,
            endereco TEXT,
            number_endereco TEXT,
            city TEXT,
            state TEXT,
            reference_point TEXT,
            images TEXT,
            type_point TEXT

        );
    `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)