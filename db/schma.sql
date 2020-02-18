-- Drops the DB if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the new database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);

SELECT * 
FROM burger;