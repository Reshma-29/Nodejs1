var express = require('express');
//var JSONData = require('./heros.json');
var fs = require("fs");
// get the client
//const mysql = require('mysql2');

// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;





const contact = new Schema({
	//id: ObjectId,
	name: String,
	phoneNo: String
});
   
const myModel = mongoose.model('contact', contact);

let Contact= {}
Contact.getAll = function(){
	return new Promise(function (resolve, reject){

		// //Set up default mongoose connection
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
		console.log(connection);
		myModel.find({},function(err,contact){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
				//console.log(result);
				console.log(contact);

				resolve(contact);
			}

		});

	});
		
}

Contact.saveContact = function(newData){
	return new Promise(function (resolve, reject){

		// //Set up default mongoose connection
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
		console.log(connection);


		var saveuser = myModel({
			name: `${newData.name}`,
			phoneNo: `${newData.phoneNo}`
		});
		saveuser.save({},function(err,contact){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
				//console.log(result);
				console.log(contact);
				//console.log('contact saved');

				resolve(contact);
			}

		});

	});
}

Contact.deleteContact = function(newData){
	return new Promise(function (resolve, reject){

		// //Set up default mongoose connection
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
		console.log(`${newData.name}`);
		// console.log(connection);

		myModel.findOneAndRemove({name:`${newData.name}`},function(err){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {

				console.log(contact);
				resolve(contact);

			}
			    
      	});
    });	
}

//update
Contact.updateContact= function(newData){
	return new Promise(function (resolve, reject){
		// //Set up default mongoose connection
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');

		myModel.findOneAndUpdate({ _id: `${newData._id}` },{ name: `${newData.name}` }, function(err, contact) {
		  if (err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
	
				//console.log('con.......'+ contact);
				resolve(contact);
			}
		});
	});
}


Contact.viewContact = function(newData){
	return new Promise(function (resolve, reject){

		// //Set up default mongoose connection
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
		console.log(connection);
		myModel.find({_id: `${newData._id}`},function(err,contact){
			if(err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
				//console.log(result);
				console.log(contact);

				resolve(contact);
			}

		});

	});
		
}

module.exports = Contact;