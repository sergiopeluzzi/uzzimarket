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

const login = async (req, res) => {
    const { email, password } = req.body
    const token = await UserService.authenticate({ email, password })
    if (token) {
        return res.status(200).json({ token })
    } else {
        return res.status(403).json({ msg: 'Acesso Negado' })
    }
}

module.exports = { getUsers, createUsers, login }