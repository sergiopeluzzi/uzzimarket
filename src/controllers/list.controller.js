const ListService = require('../services/list.service')

const getLists = async (req, res) => {
    const lists = await ListService.getLists(req.lUserId)
    return res.status(200).json({ lists })
}

const createLists = async (req, res) => {
    const { title, description } = req.body
    const userId = req.lUserId
    const owner = req. lUserName

    const list = await ListService.createLists({ title, description, userId, owner })

    if (list.errors) {
        return res.status(400).json({ error: list.errors })
    } else {
        return res.status(200).json({ list })
    }
}

const showList = async (req, res) => {
    const id = req.params.id
    const list = await ListService.showList(id)
    if (list) {
        return res.status(200).json({ list })
    } else {
        return res.status(400).json({ msg: 'list not found' })
    }
}

module.exports = { getLists, createLists, showList }