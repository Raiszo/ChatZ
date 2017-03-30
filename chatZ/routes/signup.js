var express = require('express');
var router = express.Router();

/* Add dato to DB */
router.get('/', function(req, res) {
  res.render('signup');
});

module.exports = router;
