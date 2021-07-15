DROP TABLE IF EXISTS ingredients CASCADE;
DROP TABLE IF EXISTS current_stock;

CREATE TABLE ingredients (
    _id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    -- category can be: dry goods, produce, grains, proteins, oils, dairy and eggs, snacks
    category TEXT
);

CREATE TABLE current_stock (
    _id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    ingredient_id BIGINT REFERENCES ingredients(_id),
    brand TEXT,
    quantity INTEGER,
    unit TEXT,
    purchased_from TEXT,
    price DECIMAL,
    expiry TEXT DEFAULT CONCAT(DATE_PART('month', NOW()), '/', (DATE_PART('day', NOW()) + 7))
);
