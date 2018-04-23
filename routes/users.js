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

app.post("/addmovie", function (req, res) {
  var movie = {
    email: req.body.email
  };

  connection.query("INSERT INTO users SET ?", movie, function (err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

module.exports = router;
