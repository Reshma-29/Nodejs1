var express = require('express');
var router = express.Router();

var Contact = require('../models/hero.js')

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Contacts' });
});


router.get('/getAll', function(req, res, next) {
	Contact.getAll()
	.then(function(retVal){
		console.log('here')
		console.log(retVal)
		res.render('contact',{data: retVal});	
	})
	.catch(console.log('Err: in resolving the promise'));
  
});



router.get('/saveData', function(req, res, next) {
	Contact.saveContact(req.query)
	.then(function(){
		//console.log('here')
		//console.log(retVal)
		res.redirect('/getAll');
		//res.render('contact',{data: retVal});	
	})
	.catch(console.log('Err: in resolving the promise'));
  
});


router.get('/deleteData', function(req, res, next) {
	Contact.deleteContact(req.query)
	.then(function(){
		//console.log('here')
		//console.log(retVal)
		res.redirect('/getAll');
		//res.render('contact',{data: retVal});	
	})
	.catch(console.log('Err: in resolving the promise'));
  
});


module.exports = router;
  