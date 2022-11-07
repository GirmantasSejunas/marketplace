const express = require("express")
const router = express.Router()
const { registerValidation, secretValidate } = require("../midlewere/midlewere")

const { login, register, addPost, userInfo, clothes, devices, realEstate, transport, userPosts, getPost, replacePost, removePost } = require("../controllers/mainController")


router.post("/login", login)
router.post("/register", registerValidation, register)
router.post('/addPost', addPost)
router.get("/userProfile/:secret", secretValidate, userInfo)
router.post('/clothes', clothes)
router.post('/devices', devices)
router.post('/realEstate', realEstate)
router.post('/transport', transport)
router.get('/userposts/:secret', secretValidate, userPosts)
router.get('/getpost/:id', getPost)
router.post('/replacepost', replacePost)
router.post('/removepost', removePost)

module.exports = router