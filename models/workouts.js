const mongoose = require('./connection')

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

module.exports = Workout