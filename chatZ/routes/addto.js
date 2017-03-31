var express = require('express');
var router = express.Router();
var knex = require('knex')({
	client : 'pg',
	connection : {
		host : 'localhost',
		port : '5432',
		user : 'hadas',
		password : 'hadas2017',
		database : 'hadas'
	}
});

router.post('/', function(req, res) {
	knex('persona').insert([ {'name': req.param('fname'),'pass': req.param('pass')} ]).then(function(result){
		console.log(result);
	});
	res.send('done');
});

module.exports = router;
