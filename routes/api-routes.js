const router = require('express').Router();
const db = require('../models');

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
       {_id: mongojs.ObjectID(req.params.id)}, { new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(400).json(err);
      })
});

router.post("/api/workouts", (req, res) => {
    console.log(req.body);
  
    db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    })
  });

router.get("/api/workouts", (req, res) => {
  console.log(req.body);
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
      .sort({ date: -1 })
      .limit(7)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});