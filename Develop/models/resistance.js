const { Schema } = require("mongoose");

const resistanceSchema = new Schema ({
    exercisename: String,
    weight: Number,
    sets: Number,
    reps: Number
});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Cardio,Resistance;