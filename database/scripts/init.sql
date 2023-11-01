\c recipes_database;

DROP TABLE IF EXISTS recipes;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    ingredients VARCHAR[] NOT NULL,
    instruction VARCHAR NOT NULL
);
