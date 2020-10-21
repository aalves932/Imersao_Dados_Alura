const fs = require('fs');
const parse = require('csv-parse');
const { Pool, Client } = require("pg");

const LoadRow = require('./class/LoadRow');


/* Parametros a serem configurados de acordo com o seu ambiente */
const enemFile = "/home/aalves/enem/DADOS/MICRODADOS_ENEM_2019.csv";

const client = new Client({
  user: "postgres",
  host: "xxxxxxxxxxxxxxx",
  database: "enem",
  password: "xxxxxxxxxxx",
  port: "5432"
});


async function insertBD(query, linha) {

  // promise
  return new Promise(resolve => {
    client
      .query(query)
      .then(res => {
        resolve(res.rows[0])
      }
      )
      .catch(e => console.error(e.stack));
  })
}

/***************************************************************************************************** 
 * Main                                                                                              *
 * ***************************************************************************************************/

let linha = 1


client.connect()

const rec = fs.createReadStream(enemFile, { encoding: 'latin1' }).pipe(parse({ columns: true, delimiter: ";" }))
rec.on('data', async (row) => {
  try {
    var parameters = LoadRow(row);

    var query = {
      text: "INSERT INTO candidato VALUES ("+parameters.cPar+") RETURNING nu_inscricao",
      values: parameters.aRecord
    }

    rec.pause()
    result = await insertBD(query, linha)
    console.log("Linha: ", linha, " - ", "inserted ", result)
    rec.resume()
    linha++

  } catch (ex) { return callback(ex, null); }
})
