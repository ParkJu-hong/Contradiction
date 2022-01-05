'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class summer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  summer.init({
    title: DataTypes.STRING,
    comment: DataTypes.STRING,
    src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'summer',
  });
  return summer;
};