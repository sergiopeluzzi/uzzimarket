const { json } = require('express/lib/response')
const UserService = require('../services/user.service')

const getUsers = async (req, res) => {
    const users = await UserService.getUsers()
    return res.status(200).json({ users })
}

const createUsers = async (req, res) => {
    const { name, email, password } = req.body
    const user = await UserService.createUsers({ name, email, password })
    if (user.errors) {
        return res.status(400).json({ error: user.errors })
    } else {
        return res.status(201).json({ user })    
    }
}

module.exports = { getUsers, createUsers }