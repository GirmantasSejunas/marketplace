const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const mainRouter = require("./routes/router")
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.mongo_login}`)
    .then(() => {
        console.log('CONNECTED OK')
    }).catch(e => {
    console.log('CONNECTION ERROR')
})

app.use(express.json())



app.use(cors({origin: "http://localhost:3000", credentials: true, methods: "GET,HEAD,PUT,PATCH,POST,DELETE"}))

app.listen(4000)

app.use("/", mainRouter)


