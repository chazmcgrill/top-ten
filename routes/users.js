var express = require('express');
var router = express.Router();
var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

router.get('/', function(req, res, next) {
  var q = 'SELECT * FROM movies ORDER BY ranking LIMIT 10';
  connection.query(q, function (err, rows) {
    if (err) throw err;
    var result = [];
    rows.forEach(function(row) {
      result.push(row);
    });
    res.send(result);
  });
});

router.post("/", function (req, res) {
  const q = "INSERT INTO movies SET ?";
  const movie = {
    title: req.body.title,
    imdb_id: req.body.imdb_id,
    img_url: req.body.img_url,
    ranking: 6
  };
  connection.query(q, movie, function (err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

router.delete("/:id", function (req, res) {
  const q = 'DELETE FROM movies WHERE id = ?';
  connection.query(q, req.params.id, function (err, result) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

router.put("/:id", function (req, res) {
  // const q = `UPDATE movies SET ranking=${req.body.new_rank} WHERE id = ?`;
  const q = `UPDATE movies SET ranking=${1} WHERE id = ?`;
  connection.query(q, req.params.id, function(err, result) {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

module.exports = router;
