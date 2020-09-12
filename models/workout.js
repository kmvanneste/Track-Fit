const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      // Schema for each item in exercises array
      {
        type: {
          type: String,
          trim: true,
          required: "Exercise type is required"
        },
        name: {
          type: String,
          trim: true,
          required: "Exercise name is required"
        },
        duration: {
          type: Number,
          required: "Exercise duration is required"
        },
        weight: {
          type: Number,
          required: "Weight is required"
        },
        reps: {
          type: Number,
          required: "Number of reps is required"
        },
        sets: {
          type: Number,
          required: "Number of sets is required"
        },
        distance: {
          type: Number,
          required: "Distance is required"
        },
      },
    ],
  },
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true,
    },
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual('totalDuration').get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;