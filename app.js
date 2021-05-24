const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

//Middlewares
app.use(bodyParser.json());

//Import Routes (Middleware)
const heroesRoute = require("./routes/heroes");
app.use("/heroes", heroesRoute);

const heroRoute = require("./routes/hero");
app.use("/hero", heroRoute);

//Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Homepage!");
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

//Listen to server
app.listen(3001); //on http://localhost:3001/
