INSERT INTO ingredients (name, category)
VALUES ('spinach', 'produce')
RETURNING *;


-- default expiry = today + 7 days
INSERT INTO current_stock (ingredient_id, brand, quantity, unit, purchased_from, price)
VALUES (1, 'Earthbound Farm', 12, 'oz', 'WinCo', 3.49)
RETURNING *;

-- specify an expiry date
INSERT INTO current_stock 
(ingredient_id, brand, quantity, unit, purchased_from, price, expiry)
VALUES (1, 'Earthbound Farm', 16, 'oz', 'WinCo', 4.29, '7/19')
RETURNING *;