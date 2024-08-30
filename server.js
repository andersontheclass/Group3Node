const cors = require('cors');
const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');

const usuarioRouter = require('./routes/usuario.route');
const libroRouter = require('./routes/libro.route');
const prestamoRouter = require('./routes/prestamo.route');
const autorRouter = require('./routes/autor.route');
const testConnection = require('./databases/db-config');

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    // Convierte JSON en obj
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(cors());

    // Definir endpoints
    this.usuarioEndPoint = '/usuario';
    this.libroEndPoint = '/libro';
    this.prestamoEndPoint = '/prestamo';
    this.autorEndPoint = '/autor';

    // Configuración del motor de plantillas
    this.viewEngineConfiguration();

    // Test de conexión a la base de datos
    testConnection();

    // Configuración de las rutas
    this.routes();
  }

  viewEngineConfiguration() {
    this.app.use('/', express.static(path.join(__dirname, 'FrontEnd/build')));

    np
    // this.app.engine('hbs', expressHandlebars.engine({
    //   defaultLayout: 'main',
    //   layoutsDir: path.join(__dirname, 'views', 'layouts'),
    //   partialsDir: path.join(__dirname, 'views', 'partials'),
    //   extname: '.hbs'
    // }));

    // this.app.set('view engine', 'hbs');
    // this.app.set('views', path.join(__dirname, 'views'));
  }

  routes() {
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
