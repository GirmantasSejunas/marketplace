const express = require("express")
const router = express.Router()
const { registerValidation } = require("../midlewere/midlewere")

const { login, register, addForm } = require("../controllers/mainController")


router.post("/login", login)
router.post("/register", registerValidation, register)
router.post('/addForm', addForm)

module.exports = router