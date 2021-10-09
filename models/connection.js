require('dotenv').config()
const mongoose = require('mongoose')



const MONGODB_URI = process.env.MONGODB_URI
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


mongoose.connect(MONGODB_URI, CONFIG)

mongoose.connection
.on("open", ()=> console.log('connected to mongo'))
.on("close", ()=> console.log('Disconnected from mongo'))
.on("error", ()=> console.log(error))



module.exports = mongoose