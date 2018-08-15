const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define a Contact schema to keep data in collection organized; data must adhere to this schema
const contactSchema = new Schema({
	company: { type: String, required: true, index: true },
	email: { type: String, required: true, index: true },
	name: { type: String, required: true, index: true },
});

// index company, email, and name for quick searches
contactSchema.index({
	company: 'text',
	email: 'text',
	name: 'text'
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
