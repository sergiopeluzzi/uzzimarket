const { DataTypes } = require('sequelize')
const conn = require('../database/db')

const User = conn.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

User.sync({ force: false }).then(() => {
    console.log('Table users succesfully created');
})

module.exports = User