CREATE DATABASE top_ten;
USE top_ten;

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
  "https://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@",
  1
);
