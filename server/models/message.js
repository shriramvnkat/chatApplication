"use strict"

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("message",{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true,
            autoIncrement: true
        },
        data: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
        },
        receiverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false
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
        }
    },
    {
        tableName: 'Message'
    });
    return user;
}