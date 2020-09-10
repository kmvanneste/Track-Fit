const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const path = require("path");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "Track-Fit";
const collections = ["exercises"];

const db = mongojs(databaseUrl, collections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});

app.get("/api/workouts/:id", (req, res) => {
  db.exercises.findOne(
      {
        _id: mongojs.ObjectID(req.params.id)
      },
   (error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data);
    }
  });
});

app.post("/api/workouts", (req, res) => {
    console.log(req.body);
  
    db.exercises.insert(req.body, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    });
  });

app.get("/api/workouts/range", (req, res) => {
  db.exercises.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});