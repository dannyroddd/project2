
const mongoose = require("./connection")
const Workout = require("./workouts")

mongoose.connection.on("open", ()=>{

   
    const startWorkouts = [
        { name: "Push-ups", img:'https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', sets: 5, reps: 20, bodyPart:'Chest' , caloriesBurned:60},
        { name: "Sit-Ups",img: 'https://www.inposture.com/wp-content/uploads/2020/05/Sit-ups.jpg', sets: 5, reps: 20, bodyPart: 'Abdomen', caloriesBurned:30 },
        { name: "Squats", img: 'https://experiencelife.lifetime.life/wp-content/uploads/2021/03/Squat.jpg', sets: 5, reps: 20, bodyPart: 'Legs/Quads', caloriesBurned: 35},
        { name: "Lunges (Per Leg)", img: 'https://blog.myfitnesspal.com/wp-content/uploads/2020/07/UACF-Lunges-Featured.jpg', sets: 5, reps: 20, bodyPart: 'Legs', caloriesBurned: 30},
        { name: "Jumping Jacks", img: 'https://cdn.fitimg.in/gallery_image_excellent-warm-up-exercise_FAA7.png', sets: 5, reps: 20, bodyPart: '', caloriesBurned: 20},
        { name: "1 mile run", img: 'https://www.melos-gmbh.com/fileadmin/_processed_/7/0/csm_nl-jogging-track_e2d2b8fe3f.jpg', sets: 1, reps: 1, bodyPart: 'Full Body', caloriesBurned: 100},
        { name: "Calf-Raises", img: 'https://i1.wp.com/bootcampmilitaryfitnessinstitute.com/wp-content/uploads/2018/02/Exercise-Calf-Raises-1.jpg?ssl=1', sets: 4, reps: 50, bodyPart: 'Calves', caloriesBurned:31 },
        { name: "Dips",  img: 'https://media3.popsugar-assets.com/files/thumbor/wdgNrfin9tJHa2PwJOlMiljJdws/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/09/25/939/n/1922398/1a467384_Tricep-Dips.jpg',sets: 5, reps: 20, bodyPart: 'Tricep', caloriesBurned: 60},
        { name: "Dumbbell Bicep Curls", img: 'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2018/04/dumbbell-biceps-curl.jpg?itok=68gOG_AU', sets: 5, reps: 20, bodyPart: 'Bicep', caloriesBurned: 100},
        { name: "Pull-Ups", img: 'https://s3.amazonaws.com/prod.skimble/assets/1782011/skimble-workout-trainer-exercise-burpee-pull-ups-9_iphone.jpg', sets: 5, reps: 5, bodyPart: 'Back', caloriesBurned: 25},
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