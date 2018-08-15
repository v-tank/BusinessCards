// import db and faker package
const db = require('../models');

// export functions that handle tasks based on routes that are hit
module.exports = {

	// function to add a Contact that's sent from the frontend through the req.body
	add: function(req, res) {
		// console.log(req.body);

		// create a doc in db using the sent object
		db.Contact.create(req.body)
			.then(createdContact => {
				// send back created Contact to frontend for confirmation as JSON object
				res.json(createdContact);
			})
			.catch(err => {
				// log errors if any
				console.log(err);
			});
	},

	// function to find all objects in database and return the first 1000 in the collection
	findAll: function(req, res) {
		db.Contact.find({}).limit(1000).then(locations => {
				res.json(locations); // send back an array of objects with the first 1000 locations in the db
		});
	},

	// function to find and return a Contact by its ID
	findById: function(req, res) {
		db.Contact.find({_id: req.params.id}).then(foundContact => {
			res.json(foundContact);
		})
	},

	// function to remove a document from the db
	remove: function(req, res) {
		db.Contact.remove({_id: req.params.id}).then(deleted => {
			res.json(deleted); // send back the deleted doc from the db
		})
	},

	// function to update a doc in the database based on an ID and an object sent via the req.body
	// update: function(req, res) {

	// },
}
