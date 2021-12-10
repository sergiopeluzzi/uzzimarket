const express = require('express')
const UserController = require('../controllers/user.controller')
const auth = require('../middleware/auth.middleware')

const router = express.Router()

router.get('/', auth, UserController.getUsers)
router.post('/', UserController.createUsers)
router.post('/login', UserController.login)

module.exports = router