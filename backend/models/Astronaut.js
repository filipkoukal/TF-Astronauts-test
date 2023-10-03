// Sequelize model of Astronaut table in connected db
'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Astronaut extends Model {
    static associate ({ }) {
    }
  };
  Astronaut.init({
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    superpower: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Astronaut',
    modelName: 'Astronaut',
    timestamps: true
  })
  return Astronaut
}
