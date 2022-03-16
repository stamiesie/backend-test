-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS characters CASCADE;

CREATE TABLE characters (
    character_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    character_name TEXT NOT NULL,
    character_film TEXT NOT NULL,
    character_age VARCHAR (512) NOT NULL
);