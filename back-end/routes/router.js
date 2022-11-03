const express = require("express")
const router = express.Router()
const { registerValidation } = require("../midlewere/midlewere")

const { login, register, addPost } = require("../controllers/mainController")


router.post("/login", login)
router.post("/register", registerValidation, register)
router.post('/addPost', addPost)

module.exports = router