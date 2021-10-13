//Dependencies 
require('dotenv').config()


const express = require('express');
const morgan = require("morgan")
const methodOverride = require('method-override');
const WorkoutRouter = require("./controllers/workouts")
const UserRouter = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")

//express app object
const app = express();

//middleware
app.use(morgan("tiny")) 
app.use(methodOverride("_method")) 
app.use(express.urlencoded({extended: true})) 
app.use(express.static("public")) 

//user middleware 
app.use(session({
  secret: process.env.SECRET,
  store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
  saveUninitialized: true,
  resave: false
}))

//routers 
app.use("/workouts", WorkoutRouter)
app.use("/user", UserRouter)

//more middleware
app.use(express.static('public'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));

//initial route
app.get('/' , (req, res) => {
  res.render('index.ejs');
});

//Server port listener 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('express is listening on:', PORT));