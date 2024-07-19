const getConnection = require('../databases/db-config');

const { Sequelize, DataTypes } = require('sequelize');
const Usuario = require('./usuario.model');
const sequelize = getConnection();

const Prestamo = sequelize.define('prestamo',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER
    },
    libro_id: {
      type: DataTypes.INTEGER
    },
    fecha_prestamo: {
      type: DataTypes.DATE
    },
    fecha_devolucion: {
      type: DataTypes.DATE
    }
  },
  {
    tableName: "prestamo"
  }
)

module.exports = Prestamo;