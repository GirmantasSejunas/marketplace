const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    mail: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    secret: {
        type: String,
        required: true
    }
})

const exportUser = mongoose.model("e-market_user", userSchema)

module.exports = exportUser