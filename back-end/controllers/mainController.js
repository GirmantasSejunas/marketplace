const userSchema = require("../schemas/userSchema")
const postSchema = require("../schemas/postSchema")
sendRes = require("../universalModule/universalModule")
const bcrypt = require("bcrypt")
const { uid } = require("uid")

module.exports = {


    register: async (req, res) => {

        const { mail, password } = req.body

        const hashedPassword = await bcrypt.hash(password, 10)


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


        return sendRes(res, true, "blogi prisijungimo duomenys", null)
    },
    addPost: async (req, res) => {


        const { photo, title, description, city, price, phone, option, secret } = req.body


        const newPost = new postSchema({
            photo,
            title,
            description,
            city,
            price,
            phone,
            option,
            secret
        })

        await newPost.save()
        return sendRes(res, false, "skelbimas ikeltas", newPost)
    },
    userInfo: async (req, res) => {
        const { user } = req.body

        return sendRes(res, false, "all good", user)
    },
    clothes: async (req, res) => {
        const clothesPosts = await postSchema.find({ option: 'Apranga' })
        return sendRes(res, false, 'all good', clothesPosts)
    },
    devices: async (req, res) => {
        const devicesPosts = await postSchema.find({ option: 'Prietaisai' })
        return sendRes(res, false, 'all good', devicesPosts)
    },
    realEstate: async (req, res) => {
        const realEstatePosts = await postSchema.find({ option: 'Nekilnojamas turtas' })
        return sendRes(res, false, 'all good', realEstatePosts)
    },
    transport: async (req, res) => {
        const transportPosts = await postSchema.find({ option: 'Transportas' })
        return sendRes(res, false, 'all good', transportPosts)
    },
    userPosts: async (req, res) => {
        const { secret } = req.params

        const userPosts = await postSchema.find({ secret: secret })
        return sendRes(res, false, 'all good', userPosts)
    },
    getPost: async (req, res) => {

        const { id } = req.params

        const post = await postSchema.findOne({ _id: id })

        return sendRes(res, false, "all good", post)
    },
    replacePost: async (req, res) => {
        
        const _id = req.body._id

        const newPost = await postSchema.findOneAndUpdate(
            { _id },
            { $set: req.body },
            { new: true }

        )

        return sendRes(res, false, "skelbimas pakeistas", newPost)

    },
    removePost: async (req, res) => {
        const { _id } = req.body

        const deletedPost = await postSchema.deleteOne({_id: _id})


        return sendRes(res, false, "skelbimas pasalintas", deletedPost)
    }

}