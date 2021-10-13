# Project 2 - Workout Routine Website

Heroku Link:

[https://daniel-project2.herokuapp.com/](https://daniel-project2.herokuapp.com/)

### Technologies used
1. HTML
2. CSS
3. JavaScript
4. MongoDB
5. expressJS
6. Mongoose
7. Minor Bootstrap implementation
8. EJS
9. Heroku
10. npm, bcrypt, nodemon, dotenv, method-override


### Features
1. User Authentication. Creating Accounts and Logging in and Logging out.
2. Full CRUD functionality. Create workouts, Read Workout information, Update and edit workouts, Delete Workouts.
3. Able to add a day to the counter after a workout session is completed


## What was researched for use
1. CSS Button animations - https://www.sliderrevolution.com/resources/css-button-hover-effects/

2. Average Calisthenics Workout plan - https://www.onnit.com/academy/climbing-the-hill-the-ultimate-calisthenics-transformation/

## How it was made
1. Started with creating a refactored file structure and initiating connection to mongoDB, heroku, and staring the express app.
2. Created a seed route and a Schema in MongoDB. Made sure it was connected and working in localhost before pushing to heroku.
3. Created each route one by one and then an ejs file for each route so pages can be viewed by the user.
4. Created user authentication connection and a signup and login ejs file for each.
5.Added css styling to each page

## Unsolved Problems
1. When a workout is edited , or a new one is added, it will add the response to all user accounts, not just the one that made the change.
2. Days added are not saved and reset to 0 after a user logs out or refreshes the page.


## Stretch Goals 
1. Would like to connect to an API to have plenty of workouts with more information
2. Would like to solve my unsolved problems 

## Images Used
1. https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png
2. https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
3. https://www.inposture.com/wp-content/uploads/2020/05/Sit-ups.jpg
4. https://experiencelife.lifetime.life/wp-content/uploads/2021/03/Squat.jpg
5. https://blog.myfitnesspal.com/wp-content/uploads/2020/07/UACF-Lunges-Featured.jpg
6. https://cdn.fitimg.in/gallery_image_excellent-warm-up-exercise_FAA7.png
7. https://www.melos-gmbh.com/fileadmin/_processed_/7/0/csm_nl-jogging-track_e2d2b8fe3f.jpg
8. https://i1.wp.com/bootcampmilitaryfitnessinstitute.com/wp-content/uploads/2018/02/Exercise-Calf-Raises-1.jpg?ssl=1
9. https://media3.popsugar-assets.com/files/thumbor/wdgNrfin9tJHa2PwJOlMiljJdws/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/09/25/939/n/1922398/1a467384_Tricep-Dips.jpg
10. https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/insert_main_wide_image/public/2018/04/dumbbell-biceps-curl.jpg?itok=68gOG_AU
11. https://s3.amazonaws.com/prod.skimble/assets/1782011/skimble-workout-trainer-exercise-burpee-pull-ups-9_iphone.jpg![Screen Shot 2021-10-13 at 1 16 29 PM](https://user-images.githubusercontent.com/86563943/137182073-c8301ac0-f5bd-4582-aa95-31e12b025409.png)
![Screen Shot 2021-1![Screen Shot 2021-10-13 at 1 16 55 PM](https://user-images.githubusercontent.com/86563943/137182225-9349a015-bc47-4ed3-9421-071908e4c53c.png)![Screen Shot 20![Screen Shot 2021-10-13 at 1 17 58 PM](https://user-images.githubusercontent.com/86563943/137182259-cfbc1a2b-6e54-426c-bad9-eae1ead16c2d.png)
21-10-13 at 1 17 03 PM](https://user-images.githubusercontent.com/86563943/137182245-505eb590-6666-4403-9248-cbd2a5addb77.png)

0-13 at 1 16 17 PM](https://user-images.githubusercontent.com/86563943/137182179-a33d695f-57fe-4bc4-b57b-0dc86af260d8.png)
![Screen Shot 2021-10-13 at 1 17 28 PM](https://user-images.githubusercontent.com/86563943/137182268-cbc0f206-44f9-429d-aa67-c6643e74d0fd.png)
![Screen Shot 2021-10-13 at 1 17 41 PM](https://user-images.githubusercontent.com/86563943/137182286-3af0172f-0626-4a1c-baf4-50d7f3b01358.png)
![Screen Shot 2021-10-13 at 1 17 58 PM](https://user-images.githubusercontent.com/86563943/137182451-c4ff9f07-19e4-4b31-9404-22e63f7abdcf.png)
