const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Vrisingboss = sequelize.define(
  'Boss',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING
    },
    url: {
      type: DataTypes.STRING
    },
    order: {
      type: DataTypes.INTEGER
    },
    rafa: {
      type: DataTypes.BOOLEAN
    },
    sergio: {
      type: DataTypes.BOOLEAN
    },
    juanjo: {
      type: DataTypes.BOOLEAN
    },
    lesther: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    tableName: 'vrising-bosses',
  }
)

module.exports = Vrisingboss