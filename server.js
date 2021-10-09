require('dotenv').config()


const express = require('express');
const morgan = require("morgan")
const methodOverride = require('method-override');
const WorkoutRouter = require("./controllers/workouts")
const app = express();
const session = require("express-session")
const MongoStore = require("connect-mongo")

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





db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongod disconnected'));


app.use(express.static('public'));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));


app.get('/' , (req, res) => {
  res.send('Hello !');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('express is listening on:', PORT));