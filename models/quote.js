'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quote.init({
    quote_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    loc1: DataTypes.STRING,
    loc2: DataTypes.STRING,
    items: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Quote',
    tableName: 'quotes',
    timestamps: false
  });
  return Quote;
};