const cors = require("cors");
const express = require("express");
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

app.use("/views", (_, res) => {
  res.render("main", {});
});

module.exports = app;
