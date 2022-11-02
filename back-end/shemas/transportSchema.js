const mongoose = require("mongoose")
const Schema = mongoose.Schema

const transportSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    contacts:[{
        name:String,
        phone:Number,
        city:String,
        Email:String
    }]
    
})

const exportUser = mongoose.model("e-market_transport", transportSchema)

module.exports = exportUser