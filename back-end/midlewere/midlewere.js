sendRes = require('../universalModule/universalModule')
const isEmail = require("is-email")


module.exports = {


    registerValidation: (req, res, next) => {

        const { mail, password: passOne, password2: passTwo } = req.body

        if (!isEmail(mail)) return sendRes(res, true, "blogas el.pastas", null)

        if (passTwo !== passOne) return sendRes(res, true, "slaptazodziai turi sutapti", null)

        if (!passOne) return sendRes(res, true, "slaptazodis yra privalomas", null)


        next()
    }

}