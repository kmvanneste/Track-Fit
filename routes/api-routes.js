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