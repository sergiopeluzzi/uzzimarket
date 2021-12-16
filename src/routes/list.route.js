const express = require('express')
const ListController = require('../controllers/list.controller')
const auth = require('../middleware/auth.middleware')

const router = express.Router()

router.get('/', auth, ListController.getLists)
router.post('/', auth, ListController.createLists)
router.get('/:id', auth, ListController.showList)

module.exports = router