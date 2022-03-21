-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS characters CASCADE;

CREATE TABLE characters (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    film_name TEXT NOT NULL,
    age VARCHAR (512) NOT NULL,
    voice_actor JSON NOT NULL
);