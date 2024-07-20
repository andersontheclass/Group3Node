const getConnection = require('../databases/db-config');

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = getConnection();

const Libro = sequelize.define('libro',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING
    },
    genero: {
      type: DataTypes.STRING
    }, 
    año_publicacion: {
      type: DataTypes.INTEGER
    },
    autor_id: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: 'libro',
  }
);

module.exports = Libro;