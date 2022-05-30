const express = require('express')
const router = express.Router()

//panggil controller\
// const getUser = require('../controllers/usersController')
// const getUser = require('../controllers/usersController')
// const userAdd = require('../controllers/usersController')

const {
    getUsers,
    addUser,
    editUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController.js')

router.get('/', getUsers)
router.post('/add', addUser)
router.get('/edit/:id', editUser)
router.post('/update/:id', updateUser)
router.get('/delete/:id', deleteUser)

module.exports = router