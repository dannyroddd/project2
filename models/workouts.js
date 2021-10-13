//import mongoose connection
const mongoose = require('./connection')

//Schema model 
const {Schema, model} = mongoose

const workoutSchema = new Schema({
    name: String,
    img: String,
    sets: Number,
    reps: Number,
    bodyPart: String,
    caloriesBurned: Number
})

const Workout = model("Workout", workoutSchema)


//export schema
module.exports = Workout