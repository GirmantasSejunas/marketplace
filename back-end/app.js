const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const mainRouter = require("./routes/router")
// const bcrypt = require("bcrypt")

mongoose.connect("mongodb+srv://admin:admin@cluster0.thk22x2.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log('CONNECTED OK')
    }).catch(e => {
    console.log('CONNECTION ERROR')
})

app.use(express.json())



app.use(cors)

app.listen(4000)

app.use("/", mainRouter)


