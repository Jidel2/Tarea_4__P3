const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Region = require('./Region');
const Type = require('./Type');

const Pokemon = sequelize.define('Pokemon', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Pokemon.belongsTo(Region, { foreignKey: { allowNull: false } });
Pokemon.belongsTo(Type, { foreignKey: { allowNull: false } });

module.exports = Pokemon;