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
  // res.send('respond with a resource');
  var q = 'SELECT * FROM movies';
  connection.query(q, function (err, rows) {
    if (err) throw err;
    var result = [];
    rows.forEach(function(row) {
      result.push(row);
    });
    res.send(result);
  });
});

module.exports = router;
