const db = require("../models");

module.exports = function (app) {

    app.get("/api/workouts", async (req, res) => {
        try {
            let data = await db.Workout.find({});

            data = data.map(workout => {

                let totalDuration = 0;
                let totalDistance = 0;
                workout.exercises.forEach(exercise => {
                    totalDuration = totalDuration + exercise.duration;
                    totalDistance = totalDistance + exercise.distance;
                });

                workout.totalDuration = totalDuration;
                workout.totalDistance = totalDistance;

                return {...workout._doc, totalDuration, totalDistance};
            });
            console.log("*****************")
            console.log(data);
            res.json(data);

        } catch (error) {
            console.log(error);
            res.send(error);
        }
    });

    app.get("/api/workouts/range", async (req, res) => {
        try {
            const data = await db.Workout.find({});
            res.json(data);

        } catch (error) {
            console.log(error);
            res.send(error);
        }
    });

    app.put("/api/workouts/:id", async (req, res) => {
        try {
            const data = await db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } });
            res.json(data);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    });

    app.post("/api/workouts", async (req, res) => {
        try {
            const data = await db.Workout.create(req.body);
            res.json(data);

        } catch (error) {
            console.log(error);
            res.send(error);
        }
    });


};