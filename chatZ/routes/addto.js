var express = require('express');
var router = express.Router();

/* Add dato to DB */
router.post('/', function(req, res) {
  res.send('Added to DB!');
});

module.exports = router;
