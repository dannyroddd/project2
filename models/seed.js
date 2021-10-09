
const mongoose = require("./connection")
const Workout = require("./workouts")

mongoose.connection.on("open", ()=>{

   
    const startWorkouts = [
        { name: "Push-ups", sets: 5, reps: 20, bodyPart:'Chest' , caloriesBurned:60},
        { name: "Sit-Ups", sets: 5, reps: 20, bodyPart: 'Abdomen', caloriesBurned:30 },
        { name: "Squats", sets: 5, reps: 20, bodyPart: 'Legs/Quads', caloriesBurned: 35},
        { name: "Lunges (Per Leg)", sets: 5, reps: 20, bodyPart: 'Legs', caloriesBurned: 30},
        { name: "Jumping Jacks", sets: 5, reps: 20, bodyPart: '', caloriesBurned: 20},
        { name: "1 mile run", sets: 1, reps: 1, bodyPart: 'Full Body', caloriesBurned: 100},
        { name: "Calf-Raises", sets: 4, reps: 50, bodyPart: 'Calves', caloriesBurned:31 },
        { name: "Dips", sets: 5, reps: 20, bodyPart: 'Tricep', caloriesBurned: 60},
        { name: "Dumbbell Bicep Curls", sets: 5, reps: 20, bodyPart: 'Bicep', caloriesBurned: 100},
        { name: "Pull-Ups", sets: 5, reps: 5, bodyPart: 'Back', caloriesBurned: 25},
      ];

     
      Workout.deleteMany({}, (err, data)=>{
          
        
        Workout.create(startWorkouts, (err, data)=>{
            console.log("-Workouts CREATED-")
            console.log(data)
            console.log("-Workouts CREATED-")
            mongoose.connection.close()

        })
      })

})