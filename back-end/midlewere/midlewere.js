sendRes = require('../universalModule/universalModule')
const isEmail = require("is-email")
const userSchema = require("../schemas/userSchema")



module.exports = {


    registerValidation: (req, res, next) => {

        const { mail, password: passOne, password2: passTwo } = req.body

        if (!isEmail(mail)) return sendRes(res, true, "blogas el.pastas", null)

        if (passTwo !== passOne) return sendRes(res, true, "slaptazodziai turi sutapti", null)

        if (!passOne) return sendRes(res, true, "slaptazodis yra privalomas", null)


        next()
    },
    secretValidate: async (req, res, next) => {
        let secret = ""

        if (req.params.secret) secret = req.params.secret
        if (req.body.secret) secret = req.body.secret

        const user = await userSchema.findOne({ secret }, { mail: 1, })

        if (!user) return sendRes(res, true, "user not found", null)

        req.body.user = user
        next()
    }

}