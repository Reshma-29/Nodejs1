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
//get
router.get('/getAllValues', function(req, res, next) {
	Contact.getAll()
	.then(function(retVal){
		console.log('here')
		console.log(retVal)
		res.send(retVal);	
	})
	.catch(console.log('Err: in resolving the promise'));
  
});


//put


router.put('/putValues', function(req, res, next) {
	Contact.getAll()
	.then(function(retVal){
		console.log('here')
		console.log(retVal)
		res.send(retVal);	
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

router.get('/updateRow', function(req, res, next) {
	Contact.updateContact(req.query)
	.then(function(){
		res.redirect('/getAll');
	})
	.catch(console.log('Err: in resolving the promise'));
  
});

/*//post
router.get('/saveValue', function(req, res, next) {
	Contact.saveContact(req.post)
	.then(function(){
		//console.log('here')
		//console.log(retVal)
		res.send('/getAll');
		//res.render('contact',{data: retVal});	
	})
	.catch(console.log('Err: in resolving the promise'));
  
});
*/
router.get('/deleteData', function(req, res, next) {
	Contact.deleteContact(req.query)
	.then(function(){
		res.redirect('/getAll');
			
	})
	.catch(console.log('Err: in resolving the promise'));
  
});

//delete

router.delete('/deleteValue', function(req, res, next) {
	Contact.deleteContact(req.query)
	.then(function(){
		res.json({ message: 'deleted!!!!' });
			
	})
	.catch(console.log('Err: in resolving the promise'));
  
});




router.get('/updateData', function(req, res, next) {
	Contact.viewContact(req.query)
	 .then(function(retVal){
	 	res.render('updatecontact',{data: retVal})
	 })
    .catch(console.log('ERR :: is resolving the promise'));
});

router.get('/viewData', function(req, res, next) {
	Contact.viewContact(req.query)
	 .then(function(retVal){
	 	res.render('viewcontact',{data: retVal})
	 })
    .catch(console.log('ERR :: is resolving the promise'));
});
module.exports = router;
  