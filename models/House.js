const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class House extends Model {}

House.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    move_in_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    listing_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'listing',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'house',
  }
);

module.exports = House;
