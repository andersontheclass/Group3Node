const express = require("express");
const path = require('path');
const expressHandlebars = require('express-handlebars');

const usuarioRouter = require("./routes/usuario.route");
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
    this.app.use(express.urlencoded({extended:false}));

    // engine de plantillas - motor de plantillas
    this.viewEngineConfiguration();

    // definir endPoint
    this.usuarioEndPoint = "/usuario";
    this.libroEndPoint = "/libro";
    this.prestamoEndPoint = "/prestamo";
    this.autorEndPoint = "/autor";
    testConnection(); // it comes from ./databases/db-config to test the connection

    this.routes();
  }
  viewEngineConfiguration() {
    this.app.use(express.static(path.join(__dirname, 'public')));

    this.app.engine('hbs', expressHandlebars.engine({
        defaultLayout: 'main',
        layoutsDir: path.join(this.app.get('views'), 'layouts'),
        partialsDir: path.join(this.app.get('views'), 'partials'),
        extname: '.hbs'
    }));

    this.app.set('view engine', 'hbs');
    this.app.set('views', 'views');
  }


  routes() {
    //this.app.use('/', express.static('public'));
    this.app.use(this.usuarioEndPoint, usuarioRouter);
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
