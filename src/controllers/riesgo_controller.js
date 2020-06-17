var daRiesgo = require("./../data_access/activo_data_access");

class RiesgoController {
  async riesgoList(req, res, next) {
    let permisoRpta = await daRiesgo.getRiesgos();

    res.json(permisoRpta);
    return;
  }
}

module.exports = RiesgoController.prototype;
