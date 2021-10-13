//dependencies
const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//router
const router = express.Router()

//signup route
router.get("/signup", (req, res)=>{
    res.render("user/signup.ejs")
})

router.post("/signup", async (req, res) => {

  //hash the password and create a new user
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

    
    User.create(req.body, (err, user)=>{
        console.log(user)
        res.redirect("/user/login")
    })
})

//login route
router.get("/login", (req,res)=>{
    res.render("user/login.ejs")
})

router.post("/login", (req, res) => {
    
    const { username, password } = req.body;
    User.findOne({ username }, (err, user) => {
      //get data from request and check if user exists and password is correct
      if (!user) {
        res.send("user doesn't exist");
      } else {
       
        const result = bcrypt.compareSync(password, user.password);
        if (result) {
            req.session.username = username
            req.session.loggedIn = true
          res.redirect("/workouts");
        } else {
          res.send("wrong password");
        }
      }
    });
  });

//logout route
router.get("/logout", (req, res)=>{

    //end the session
    req.session.destroy((err)=>{
        res.redirect('/')
    })
})




//export the router
module.exports = router