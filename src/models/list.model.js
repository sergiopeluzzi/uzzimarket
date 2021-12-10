const { DataTypes } = require('sequelize')
const conn = require('../database/db')
const User = require('./user.model')

const List = conn.define('lists', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false
    },
    finishedAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: true
    },
})

User.hasMany(List)
List.belongsTo(User)

List.sync({ force: false }).then(() => {
    console.log('Table lists succesfully created');
})

module.exports = List