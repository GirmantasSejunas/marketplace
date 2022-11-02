const express = require("express")
const router = express.Router()

const {login, register, addForm} = require("../controllers/mainController")


router.post("/login", login)
router.post("/register", register)
router.post('/addForm', addForm)

module.exports = router