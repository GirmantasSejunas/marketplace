const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    photo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    option: {
        type: String,
        required: true
    }
})

const exportPost = mongoose.model("e-market_posts", postSchema)

module.exports = exportPost