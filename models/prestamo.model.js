const getConnection = require('../databases/db-config');

const { Sequelize, DataTypes } = require('sequelize')
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
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // Set default value to current date and time
      allowNull: false // Ensure it cannot be null
    },
    fecha_devolucion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    tableName: 'prestamo', // Specify the table name explicitly
    timestamps: true // Adds createdAt and updatedAt fields
  }
)

module.exports = Prestamo;