const Workout = require("../models");

module.exports = function(app){

    app.get("/api/workouts",async(req,res)=>{
       try {
        const data = await Workout.find({});
        console.log(data);
        res.json(data);

       } catch (error) {
        console.log(error);
        res.send(error);
       }
    });

    app.get("/api/workouts/range",async(req,res)=>{
        try {
         const data = await Workout.find({}).limit(7);
         res.json(data);
 
        } catch (error) {
         console.log(error);
         res.send(error);
        }
     });

    app.put("/api/workouts/:id", async(req,res)=>{
        try {
            const data = await Workout.findByIdUpdate(req.params.id, {$push: { exercises: req.body}});
            res.json(data);
        } catch (error) {
            console.log(error);
         res.send(error);
        }
    });

    app.post("/api/workouts",async(req,res)=>{
        try {
         const data = await Workout.create({});
         res.json(data);
 
        } catch (error) {
         console.log(error);
         res.send(error);
        }
     });


};