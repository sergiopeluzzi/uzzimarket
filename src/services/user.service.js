const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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

const authenticate = async (query) => {
    try {
        const user = await User.findOne({ where: { email: query.email } })
        if (user) {
            const correct = bcrypt.compareSync(query.password, user.password)
            if (correct) {
                const token = jwt.sign({ 
                    id: user.id,
                    email: user.email,
                    name: user.name
                }, process.env.SECRET, {
                    expiresIn: '2h'
                })

                return token
            }
        }
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { getUsers, createUsers, authenticate }