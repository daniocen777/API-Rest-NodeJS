/**
 * Este es el módulo de conexion de la aplicación,
 * el cual permite realizar la conexión a las
 * diferentes bases de datos que utiliza el
 * backend.
 */
var mysql = require("mysql");
const util = require("util");
/**
 * Esto Crea un pool de conexiones a Mysql para tener
 * una cola de espera y evitar la saturación del servidor
 */
const mysqlClient = mysql.createPool({
  connectionLimit: 20,
  host: "localhost",
  user: "root",
  password: "",
  database: "risk",
});

/**
 * Esto inicia la conexión con el server y si hay error, se reporta
 */
mysqlClient.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("La conexión MYSQL se ha cerrado");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("MySQL tiene muchas conexiones");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Conexión MYSQL rechazada");
    }
  }

  if (connection) {
    connection.release();

    console.log("Conexión MYSQL establecida");
  }

  return;
});

/**
 * Esto permite utilizar el await/async con mysql
 */
mysqlClient.query = util.promisify(mysqlClient.query);
mysqlClient.getConnection = util.promisify(mysqlClient.getConnection);

/**
 * El modulo exporta:
 * mysqlClient: El cliente mysql como promise
 */
module.exports = { mysqlClient };
