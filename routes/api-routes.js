const router = require('express').Router();
const db = require('../models/workout.js');

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: params.id }, { $push: { exercises: body } }
    )
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(400).json(err);
      })
});

router.post("/api/workouts", ({ body }, res) => {  
    db.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err);
    })
  });

router.get("/api/workouts", (req, res) => {
  db.Workout.find()
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

module.exports = router;