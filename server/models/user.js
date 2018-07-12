"use strict"

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:{
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
            notEmpty: true
           }
         },
        created_at :{
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_at :{
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        active :{
            type: DataTypes.BOOLEAN, 
            allowNull: false,
            defaultValue: false
        },
    },
    {
        tableName: 'Users'
    });
    return user;
}