require('dotenv').config()


const express = require('express');
const morgan = require("morgan")
const methodOverride = require('method-override');
const WorkoutRouter = require("./controllers/workouts")
const UserRouter = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")

const app = express();

app.use(morgan("tiny")) 
app.use(methodOverride("_method")) 
app.use(express.urlencoded({extended: true})) 
app.use(express.static("public")) 
app.use(session({
  secret: process.env.SECRET,
  store: MongoStore.create({mongoUrl: process.env.MONGODB_URI}),
  saveUninitialized: true,
  resave: false
}))
app.use("/workouts", WorkoutRouter)
app.use("/user", UserRouter)

app.use(express.static('public'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));


app.get('/' , (req, res) => {
  res.render('index.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('express is listening on:', PORT));