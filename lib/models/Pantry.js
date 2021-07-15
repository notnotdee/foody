const pool = require("../../db/connection/pool");

module.exports = {
  async viewInventory() {
    const client = await pool.connect();
    const { rows } = await client.query(
      `
            SELECT
            	current_stock._id,
            	category,
            	name,
            	brand, 
              CONCAT(quantity, ' ', unit) AS quantity,
            	price, 
            	purchased_from, 
            	expiry
            FROM current_stock
            INNER JOIN ingredients 
            ON current_stock.ingredient_id = ingredients._id;
      `
    );
    return rows;
  },
};
