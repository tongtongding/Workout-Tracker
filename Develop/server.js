const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// const databaseUrl = "workout";
// const collections = ["Cardio","Resistance"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
