const express = require("express")
const router = express.Router()
const { registerValidation, secretValidate } = require("../midlewere/midlewere")

const { login, register, addPost, userInfo } = require("../controllers/mainController")


router.post("/login", login)
router.post("/register", registerValidation, register)
router.post('/addPost', addPost)
router.get("/userProfile/:secret", secretValidate, userInfo)

module.exports = router