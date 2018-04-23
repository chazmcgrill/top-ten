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

/* GET users listing. */
router.get('/', function(req, res, next) {
  var q = 'SELECT * FROM movies ORDER BY ranking';
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
  var movie = {
    title: req.body.title,
    imdb_id: req.body.imdb_id,
    img_url: req.body.img_url,
    ranking: 6
  };
  connection.query("INSERT INTO movies SET ?", movie, function (err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

router.delete("/:id", function (req, res) {
  connection.query('DELETE FROM movies WHERE id = ?', req.params.id, function (err, result) {
    if (err) throw err;
    // res.redirect("/");
  });
});


module.exports = router;
