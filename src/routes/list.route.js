const express = require('express')
const ListController = require('../controllers/list.controller')
const auth = require('../middleware/auth.middleware')

const router = express.Router()

router.get('/', auth, ListController.getLists)
router.post('/', auth, ListController.createLists)
router.get('/:id', auth, ListController.showList)
router.post('/:id/items', auth, ListController.createItems)
router.get('/:id/items', auth, ListController.getItems)
router.delete('/:id/item/:item', auth, ListController.removeItem)

module.exports = router