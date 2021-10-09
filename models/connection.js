require('dotenv').config()
const mongoose = require('mongoose')



const DATABASE_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
.on("open", ()=> console.log('connected to mongo'))
.on("close", ()=> console.log('Disconnected from mongo'))
.on("error", ()=> console.log(error))



module.exports = mongoose