const getConnection = require('../databases/db-config');

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = getConnection();

const Usuario = sequelize.define('usuario',
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
    email: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, 
  {
    tableName: "usuario",
  }

);

module.exports = Usuario;