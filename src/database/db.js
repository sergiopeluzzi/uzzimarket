const Sequelize = require('sequelize')
const connection = new Sequelize('uzzimarket', 'root', 'ser110403', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

module.exports = connection