var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("this is index page")
});
router.get('/about', function(req, res, next) {
  res.send("this is about page")
});
router.get('/contact', function(req, res, next) {
  res.send("this is contact page")
});

module.exports = router;
