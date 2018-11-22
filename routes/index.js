var express = require('express');
var router = express.Router();
var Heros = require('../models/hero.js')

router.get('/', function(req, res, next) {
 	res.render('index', { title: 'SuperHeros' });
});

//router.get('/saveData', function(req, res, next) {
//	Heros.saveNew(req.query);
//	res.render('heros',{data:req.query});
//});
router.get('/saveData', function(req, res, next) {
	Heros.saveNew(req.query)
	.then(function(){
		res.redirect('/getAllHeros');
	})
	.catch(console.log('Err: in resolving the promise'));
});
router.get('/getAllHeros', function(req, res, next) {
	Heros.getAll()
	.then(function(retVal){
		res.render('heros',{data: retVal});	
	})
	.catch(console.log('Err: in resolving the promise'));
  
});
router.get('/deleteHero', function(req, res, next) {
	Heros.deleteHero(req.query)
	.then(function(){
		res.redirect('/getAllHeros')
	})
	.catch(console.log('Err: in resolving the promise'));
  
});
router.get('/updateData', function(req, res, next) {
	Heros.updateHero(req.query)  
	.then(function(retVal){
		res.render('updatehero',{data: retVal})
	})
	.catch(console.log('Err: in resolving the promise'));
  
});
router.get('/viewHero', function(req, res, next) {
	Heros.viewHero(req.query)
	.then(function(retVal){
		res.render('viewheros',{data: retVal});	
	})
	.catch(console.log('Err: in resolving the promise'));
  
});





module.exports = router;
  