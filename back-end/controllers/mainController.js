const userSchema = require("../schemas/userSchema")
const postSchema = require("../schemas/postSchema")
sendRes = require("../universalModule/universalModule")
const bcrypt = require("bcrypt")
const { uid } = require("uid")

module.exports = {


    register: async (req, res) => {

        const { mail, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)

        console.log(hashedPassword)

        const newUser = new userSchema({ mail, hashedPassword, secret: uid() })

        await newUser.save()


        return sendRes(res, false, 'sukurtas naujas vartotojas', null)
    },
    login: async (req, res) => {
        const { email: mail, password } = req.body


        const user = await userSchema.findOne({ mail })

        if (user) {
            const compare = await bcrypt.compare(password, user.hashedPassword)
            if (compare) {
                return sendRes(res, false, 'sekmingai prisijungete', { secret: user.secret })
            }
        }


        return sendRes(res, true, "blogi duomenys", null)
    },
    addPost: async (req, res) => {

        const { photo, title, description, city, price, phone, option } = req.body

        

        const newPost = new postSchema({
            photo, 
            title, 
            description, 
            city, 
            price, 
            phone, 
            option
        })

        await newPost.save()
        return sendRes(res, false, "skelbimas ikeltas", null)
    },
    userInfo: async (req, res) => {
        const {user} = req.body

        return sendRes(res, false, "all good", user)
    }

}