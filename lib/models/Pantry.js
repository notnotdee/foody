const pool = require("../../db/connection/pool");

module.exports = {
  async viewInventory() {
    const client = await pool.connect();
    const { rows } = await client.query(
      `
        SELECT 
            name,
            brand, 
            CONCAT(quantity, ' ', unit),
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

  async toJSON() {
    const client = await pool.connect();
    const { rows } = await client.query(
      `
            SELECT
            	current_stock._id,
            	name,
            	category,
            	brand, 
                quantity, 
                unit,
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
