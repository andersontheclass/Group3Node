const express = require("express");
const userRouter = require("./routes/usuario.route");
const libroRouter = require("./routes/libro.route");
const prestamoRouter = require("./routes/prestamo.route");
const autorRouter = require("./routes/autor.route");
const testConnection = require("./databases/db-config");

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    // convierte json en obj
    this.app.use(express.json());

    this.usuarioEndPoint = "/api/usuario";
    this.libroEndPoint = "/api/libro";
    this.prestamoEndPoint = "/api/prestamo";
    this.autorEndPoint = "/api/autor";
    //testConnection(); it comes from ./databases/db-config to test the connection

    this.routes();
  }
  routes() {
    this.app.use(this.usuarioEndPoint, userRouter);
    this.app.use(this.libroEndPoint, libroRouter);
    this.app.use(this.prestamoEndPoint, prestamoRouter);
    this.app.use(this.autorEndPoint, autorRouter);
  }
  run() {
    this.app.listen(this.port, () =>
      console.log(`This server is running at port ${this.port}`)
    );
  }
}
module.exports = Server;
