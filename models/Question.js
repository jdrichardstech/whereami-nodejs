var mongoose = require('mongoose');

var Questionschema = new mongoose.Schema({
	image: {type:String, default:''},
	answer: {type:String, trim:true, lowercase:true, default:''},
	options: {type:Array, default:[]},
	timestamp: {type:Date, default: Date.now}
});

Questionschema.methods.summary = function() {
	var summary = {
		'firstName':this.firstName,
		'lastName':this.lastName,
		'answer':this.answer,
		'timestamp':this.timestamp,
		'options':this.options,
		'id':this._id
	};
	
	return summary;
};

module.exports = mongoose.model('Questionschema', Questionschema);