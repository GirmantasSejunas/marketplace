const userSchema = require("../shemas/userSchema")
sendRes = require ("../universalModule/universalModule")
const bcrypt = require("bcrypt")
const {uid} = require("uid")

module.exports = {


register: async (req, res) => {

    const {mail, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    console.log(hashedPassword)

    const newUser = new userSchema({mail, hashedPassword, secret: uid()})

    await newUser.save()
    

   return  sendRes(res, false, 'sukurtas naujas vartotojas', null)
},
login: async (req, res) => {

    const user = req.body
    


    sendRes (res, false, 'kazkas', user)
},
addForm: async (req, res) =>{

    const formData = req.body
    
    res.send({formData})
}

}