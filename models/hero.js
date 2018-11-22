var express = require('express');
var mysql = require('mysql2');

let Heros= {}
Heros.getAll = function(){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'heros',
			password : 'ccs#1234'
		});
		let query='select * from comic where is_valid = 1';
		connection.query(query,function(err, result, fields){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database');
				reject();
			}
			else{
			//console.log(result);
			//console.log(fields);
				resolve(result);
			}
		});
	});
}

Heros.saveNew = function(newHeroData){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'heros',
			password : 'ccs#1234'
		});
		let query=`insert into comic(superhero,publisher,alter_ego,first_appearance,characters,is_valid,update_time)values('${newHeroData.superhero}','${newHeroData.publisher}','${newHeroData.alter_ego}','${newHeroData.first_appearance}','${newHeroData.characters}',1,'${new Date()}')`;
		connection.query(query,function(err, result, fields){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database');
				reject();
			}
			else{
			//console.log(result);
			//console.log(fields);
				resolve(result);
			}
		});
	})
   
}

Heros.deleteHero= function(newHeroData){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'heros',
			password : 'ccs#1234'
		});
		let query=`update comic set is_valid=0 where id='${newHeroData.id}'`;
		connection.query(query,function(err, result, fields){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database');
				reject();
			}
			else{
			//console.log(result);
			//console.log(fields);
				resolve(result);
			}
		});
	})

}
Heros.updateHero= function(newHeroData){
return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'heros',
			password : 'ccs#1234'
		});
		let query =`update comic set superhero= '${newHeroData.superhero}',publisher='${newHeroData.publisher}',alter_ego='${newHeroData.alter_ego}',first_appearance='${newHeroData.first_appearance}',characters='${newHeroData.characters}',is_valid=1,update_time='${new Date()}' where id='${newHeroData.id}'`;
		
		connection.query(query,function(err, result, fields){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database');
				reject();
			}
			else{
			//console.log(result);
			//console.log(fields);
				resolve(result);
				
			}
		});
	})
}
Heros.viewHero=function(newHeroData){
	return new Promise(function(resolve,reject){
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			database: 'heros',
			password : 'ccs#1234'
		});
		let query=`select * from comic where id='${newHeroData.id}'`;
		connection.query(query,function(err, result, fields){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database');
				reject();
			}
			else{
			//console.log(result);
			//console.log(fields);
				resolve(result);
			}
		});
	});
}

module.exports = Heros;