const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const Pantry = require("./models/Pantry");

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/pantry/json", (req, res, next) => {
  Pantry.toJSON()
    .then((data) => res.send(data))
    .catch(next);
});

app.get("/pantry/view", (req, res, next) => {
  Pantry.viewInventory()
    .then((data) => res.send(data))
    .catch(next);
});

app.use("/", (_, res) => {
  res.render("main", {});
});

module.exports = app;
