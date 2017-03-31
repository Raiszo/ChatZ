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
	console.log(req.param('user'));
	knex('persona').where( {name: req.param('remitente')} ).select('id_p').then( function(result) {
		console.log(result);
	});
	var sub = knex('persona').where( {name: req.param('remitente')} ).select('id_p');
	knex('mensajeria').insert([ {'id_remiente': sub,'id_receptor':req.param('user'),'mensaje': req.param('comentario')} ]).then (function(result) {
		console.log(result);
	});
	knex.select('id_remiente','mensaje').from('mensajeria').then(function(result){
    res.render('bandeja', {
      u: req.param('u'),
      remitente: req.param('u'),
      mensajes: result
    });
  });
});

module.exports = router;
