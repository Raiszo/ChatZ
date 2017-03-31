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
	console.log(req.param('remitente'));
	var sub = knex('persona').where( {name: req.param('remitente')} ).select('id_p');
	console.log(sub);
	knex('mensajeria').insert([ {'id_remiente': sub,'id_receptor':req.param('user'),'mensaje': req.param('comentario')} ]).then (function(result) {
		res.render('bandeja');
		console.log(result);
	});
});

module.exports = router;
