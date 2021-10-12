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


router.get("/", async (req, res) => {
    const workouts = await Workout.find({});
    res.render("workouts/index.ejs", { workouts});
  });

  router.get("/:id/edit", (req, res) => {
    const id = req.params.id
    Workout.findById(id, (err, workout) => {
        res.render("workouts/edit.ejs", {workout})
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id
   
    Workout.findByIdAndUpdate(id, req.body, {new: true}, (err, workout) => {
        res.redirect("/workouts")
    })
})

    router.get("/new", (req, res) => {
        res.render("workouts/new.ejs")
    })

    router.post("/", (req, res) => {
       
    
  
        req.body.username = req.session.username
        req.body.img = "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"
        
   
        Workout.create(req.body, (err, workouts) => {
           
            res.redirect("/workouts")
        })
    })

    router.delete("/:id", (req, res) => {
        const id = req.params.id
        Workout.findByIdAndRemove(id, (err, workout) => {
            res.redirect("/workouts")
        })
    })

    router.get('/:id', (req, res) => {
        const id = req.params.id
        Workout.findById(id, (err, workout) => {
            res.render("workouts/show.ejs", {workout})
         })
        });

module.exports = router

// res.render('show.ejs', { data: startWorkouts[req.params.id] });