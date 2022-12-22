const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('race', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        height: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        life_span: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createInDb:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    })
}