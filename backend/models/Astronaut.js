'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Astronaut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ }) {
      // define association here

    }
    /*toJSON(){
      return { ...this.get(), User_id: undefined} //přepíše defaultní funkci toJSON() tak že nevrací id (bezpečnost I guess)
    }*/
  };
  Astronaut.init({
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    superpower: {
      type: DataTypes.STRING(200),
      allowNull: true,
    }
  }, {
    sequelize,
    tableName: 'Astronaut',
    modelName: 'Astronaut',
    timestamps: true
  });
  return Astronaut;
};
