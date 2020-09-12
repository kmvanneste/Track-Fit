const router = require('express').Router();
const db = require('../models');

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
       {_id: mongojs.ObjectID(req.params.id)}, { new: true, runValidators: true }
    )
  
      // Fill in .then() with call back function that takes result from db as input argument and send it back to browser
      .then()
  
      // Fill in .catch() with call back function that takes error as input argument and send it back to browser
      .catch()
});

router.post("/api/workouts", (req, res) => {
    console.log(req.body);
  
    db.Workout.insert(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  });

router.get("/api/workouts", (req, res) => {
  console.log(req.body);

  db.Workout.insert(req.body, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.send(data);
    }
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});