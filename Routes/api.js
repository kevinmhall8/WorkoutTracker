const router = require("express").Router();
const Workout = require("../Models/workouts.js");

  router.get("/api/workouts", (req, res) =>{
      Workout.find()
      .then(dbWorkout =>{
          res.json(dbWorkout);
      })
      .catch(err =>{
          res.status(400).json(err)
      });
  });


router.post("/api/workouts", ({ body }, res) => {
  Workout.create ({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body , params}, res) => {
  Workout.findByIdAndUpdate(
    params.id, 
    {$push:{exercises:body}},
    {new: true})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



module.exports = router;