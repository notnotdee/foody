const app = require("./lib/app");
const pool = require("./db/connection/pool");

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

process.on("exit", () => {
  console.log("Goodbye!");
  pool.end();
});
