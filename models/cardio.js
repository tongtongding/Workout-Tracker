const { Schema } = require("mongoose");

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const cardioSchema = new Schema ({
    cardioname:{
        type: String
    },
    distance: Number,
    duration: Number,
});



const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;