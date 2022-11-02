// const userSchema = require("../shemas/userSchema")

module.exports = {

login: async (req, res) => {

    const {user} = req.body
    // const newUser = new userSchema(req.body)
    // await newUser.save()

    
    
    res.send({user})
},
register: async (req, res) => {

    res.send({ok: "ok"})
}




}