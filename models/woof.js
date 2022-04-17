'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Woof extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Woof.init({
    name: DataTypes.STRING,
    woof: DataTypes.TEXT,
    wow:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Woof',
  });
  return Woof;
};