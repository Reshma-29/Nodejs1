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
	id: ObjectId,
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
		console.log(connection);


		myModel.find({name: `${newData.name}`},function(err,contact){
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
		
		       
        contact.remove({},function(err,contact){
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
});	
}

module.exports = Contact;