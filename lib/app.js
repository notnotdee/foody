const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

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

app.use("/pantry", require("./controllers/pantry"));

app.use("/views", (_, res) => {
  res.render("main", {});
});

module.exports = app;
