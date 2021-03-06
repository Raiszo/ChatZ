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
	knex.select('id_remiente','mensaje').from('mensajeria').then(function(result){
		res.render('bandeja', {
			u: req.param('u'),
			remitente: req.param('u'),
			mensajes: result
		});
	});
});

module.exports = router;
