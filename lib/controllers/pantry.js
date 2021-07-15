const { Router } = require("express");
const Pantry = require("../models/Pantry");

module.exports = Router()
  .get("/json", (req, res, next) => {
    Pantry.toJSON()
      .then((data) => res.send(data))
      .catch(next);
  })

  .get("/view", (req, res, next) => {
    Pantry.viewInventory()
      .then((data) => res.send(data))
      .catch(next);
  });
