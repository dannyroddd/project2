//dependencies
const express = require("express")
const Workout = require("../models/workouts")

//router
const router = express.Router()


//router middleware
router.use((req, res, next)=>{
    if (req.session.loggedIn){
        next()
    } else {
        res.redirect("/user/signup")
    }
})

//routes
//get the starter data for index route
router.get("/", async (req, res) => {
    const workouts = await Workout.find({});
    res.render("workouts/index.ejs", { workouts});
  });

  //edit route
  router.get("/:id/edit", (req, res) => {
    const id = req.params.id
    Workout.findById(id, (err, workout) => {
        res.render("workouts/edit.ejs", {workout})
    })
})

//update edited workout
router.put("/:id", (req, res) => {
    const id = req.params.id
   
    Workout.findByIdAndUpdate(id, req.body, {new: true}, (err, workout) => {
        res.redirect("/workouts")
    })
})

//new route
    router.get("/new", (req, res) => {
        res.render("workouts/new.ejs")
    })

    //post new workout
    router.post("/", (req, res) => {
       
    
  
        req.body.username = req.session.username
        req.body.img = "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"
        
   
        Workout.create(req.body, (err, workouts) => {
           
            res.redirect("/workouts")
        })
    })

    //delete route - delete workout
    router.delete("/:id", (req, res) => {
        const id = req.params.id
        Workout.findByIdAndRemove(id, (err, workout) => {
            res.redirect("/workouts")
        })
    })

    //show route - show workout info
    router.get('/:id', (req, res) => {
        const id = req.params.id
        Workout.findById(id, (err, workout) => {
            res.render("workouts/show.ejs", {workout})
         })
        });

        //export router
module.exports = router
