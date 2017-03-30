var express = require('express');
var router = express.Router();

/* Add dato to DB */
router.post('/', function(req, res) {
  res.render('signup');
});

module.exports = router;
