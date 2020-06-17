var mysql = require("./conexion").mysqlClient;
var Funciones = require("./../utils/functions");

class RiesgoDataAccess {
  /**
   * Lista los riesgos
   * @param {ninguno}
   */
  async getRiesgos() {
    let nameFunction = "getRiesgos";

    try {
      let query1 = "SELECT * from actives";

      let response = await mysql.query(query1);

      return Funciones.responderOK("OK", response);
    } catch (ex) {
      return Funciones.responderError(
        "nameFunction: " + nameFunction + " => " + ex
      );
    }
  }
}

module.exports = RiesgoDataAccess.prototype;
