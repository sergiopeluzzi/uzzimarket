const { DataTypes } = require('sequelize')
const conn = require('../database/db')
const List = require('./list.model')

const Item = conn.define('items', {
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true
    },
    qnt: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 1
    },
    checked: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: false
    },
})

List.hasMany(Item)
Item.belongsTo(List)

Item.sync({ force: false }).then(() => {
    console.log('Table items succesfully created');
})

module.exports = Item