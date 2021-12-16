const List = require('../models/list.model')

const getLists = async (userId) => {
    const lists = await List.findAll({ where: { userId }})
    return lists
}

const createLists = async (query) => {
    try {
        const list = await List.create(query)
        return list
    } catch (error) {
        return error
    }
}

const showList = async (id) => {
    try {
        const list = await List.findByPk(id)
        return list
    } catch (error) {
        return error
    }
}

module.exports = { getLists, createLists, showList }