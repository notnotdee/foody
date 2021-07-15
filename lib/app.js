const cors = require("cors");
const express = require("express");
const Pantry = require("./models/Pantry");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());

app.set("views", "./views");
app.set("view engine", "pug");

app.use("/pantry", require("./controllers/pantry"));

app.use("/table", (_, res) => {
  res.render("table");
});

app.use("/", (_, res) => {
  return Pantry.viewInventory().then((ingredients) =>
    res.render("main", { ingredients })
  );
});

module.exports = app;
