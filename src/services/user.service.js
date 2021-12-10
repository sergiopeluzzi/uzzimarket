const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const { BaseError } = require('sequelize/dist')

const getUsers = async () => {
    const users = await User.findAll()
    return users
}

const createUsers = async (query) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(query.password, salt)
        query.password = hash
        const user = await User.create(query)
        return user
    } catch (error) {
        return error
    }
}

module.exports = { getUsers, createUsers }