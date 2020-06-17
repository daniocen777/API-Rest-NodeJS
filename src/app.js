const express = require("express");
const morgan = require("morgan");
const app = express();

var riesgoRouter = require("./routes/riesgo_route");

/*  Setting */
app.set("port", process.env.PORT || 3000);

/*  Middlewares */
app.use(morgan("dev"));
/* Rutas */

app.use("/riesgos", riesgoRouter);

app.listen(app.get("port"), () => {
  console.log("Server on Port", app.get("port"));
});
