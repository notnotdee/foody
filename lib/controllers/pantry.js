const { Router } = require("express");
const Pantry = require("../models/Pantry");

module.exports = Router().get("/", (req, res, next) => {
  Pantry.viewInventory()
    .then((data) => res.send(data))
    .catch(next);
});
