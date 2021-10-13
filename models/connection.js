//dependencies
require('dotenv').config()
const mongoose = require('mongoose')


//database connection 
const MONGODB_URI = process.env.MONGODB_URI
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

//connect 
mongoose.connect(MONGODB_URI, CONFIG)

mongoose.connection
.on("open", ()=> console.log('connected to mongo'))
.on("close", ()=> console.log('Disconnected from mongo'))
.on("error", ()=> console.log(error))


//export mongoose connection
module.exports = mongoose