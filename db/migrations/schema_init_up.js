const pool = require("../connection/pool");
const fs = require("fs");

(async () => {
  await pool.query(fs.readFileSync("./db/schema/setup.sql", "utf-8"));
})();
