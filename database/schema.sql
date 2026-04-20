CREATE DATABASE recipe_db;
USE recipe_db;

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    preferences TEXT,
    allergies TEXT
);

-- Reviews Table
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    recipe_id INT,
    rating INT,
    comment TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);