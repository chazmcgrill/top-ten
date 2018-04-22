-- CREATE DATABASE top_ten;
-- USE top_ten;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  imdb_id VARCHAR(50) NOT NULL,
  img_url VARCHAR(255) NOT NULL,
  ranking INT
);

INSERT INTO movies (title, imdb_id, img_url, ranking) 
VALUES (
  "Pulp Fiction", 
  "tt0110912",
  "MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@",
  1
);

INSERT INTO movies (title, imdb_id, img_url, ranking) 
VALUES (
  "Office Space", 
  "tt0151804", 
  "MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_SX300.jpg",
  3
);

INSERT INTO movies (title, imdb_id, img_url, ranking) 
VALUES (
  "Blade Runner", 
  "tt0083658", 
  "MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  2
);
