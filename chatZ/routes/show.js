var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')();
var db = pgp("postgres://hadas:hadas2017@127.0.0.1:5432/hadas");

router.get('/', function(req, res) {
	db.any("SELECT * FROM persona")
		.then( function (data) {
			res.send(data);
			res.send(data.value);
		})
		.catch(function (error) {
			console.log("ERROR: ", error);
		});
});

module.exports = router;
