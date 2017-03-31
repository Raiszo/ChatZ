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
	knex.select('id_p','name').from('persona').then(function(result){
		res.render('mensajeria', {
			remitente: req.param('user'),
			usuarios: result
		});
		console.log(result);
	});
});

module.exports = router;
