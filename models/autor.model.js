const getConnection = require('../databases/db-config');

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = getConnection();

const Autor = sequelize.define('autor',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    nombre: {
      type: DataTypes.STRING
    },
    apellido: {
      type: DataTypes.STRING
    }, 
    nacionalidad: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "autor",
  }
);

module.exports = Autor;