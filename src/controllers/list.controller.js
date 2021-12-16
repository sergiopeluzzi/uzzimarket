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
    const userId = req.lUserId
    const list = await ListService.showList(id, userId)
    if (list) {
        return res.status(200).json({ list })
    } else {
        return res.status(400).json({ msg: 'list not found' })
    }
}

const createItems = async (req, res) => {
    const id = req.params.id
    const userId = req.lUserId
    const { items } = req.body

    const item = await ListService.createItems(items, id, userId)
    
    if (item) {
        return res.status(200).json({ item })
    } else {
        return res.status(400).json({ msg: 'Failed to save Items' })
    }
}

const getItems = async (req, res)  => {
    const id = req.params.id
    const items = await ListService.getItems(id)

    if(items) {
        return res.status(200).json({ items })
    } else {
        return res.status(400).json({ msg: 'items not found' })
    }
}

module.exports = { getLists, createLists, showList, createItems, getItems }