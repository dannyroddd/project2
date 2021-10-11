const express = require("express")
const Workout = require("../models/workouts")

const router = express.Router()

router.use((req, res, next)=>{
    if (req.session.loggedIn){
        next()
    } else {
        res.redirect("/user/login")
    }
})

router.get("/seed", (req, res) => {
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

  
  Workout.deleteMany({}, (err, data) => {
      
      Workout.create(startWorkouts, (err, data) => {
        
          res.json(data)
      })
  })
})

// INDEX
router.get('/', (req, res) => {
    Workout.find({username: req.session.username}, (err, startWorkouts) => {
        res.render("workouts/index.ejs", {data: startWorkouts})
    })
    });

    router.get("/new", (req, res) => {
        res.render("workouts/new.ejs")
    })

    router.post("/", (req, res) => {
       
    
  
        req.body.username = req.session.username
        req.body.img = "https://www.planetfitness.com/sites/default/files/feature-image/xbreak-workout_602724.jpg.pagespeed.ic.v8byD7su-e.jpg"
        
   
        Workout.create(req.body, (err, workouts) => {
           
            res.redirect("/workouts")
        })
    })

module.exports = router