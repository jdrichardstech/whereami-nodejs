var Question = require('../models/Question')

module.exports = {


get: function(params, completion){
	Question.find(params, function(err, questions){
 			if(err){
 				completion(err,null);
 				return;
 			}

 			
 				completion(null, questions)
 				return;
 			});	
	},


getById: function(id, completion){
		Question.findById(id,function(err, question){
			if(err){

				completion(err,null);
				return;
			}

			completion(null, question)
			return;

		});
	
	},
post: function(params, completion){
		//console.log ('Create question: ' +JSON.stringify(options))
		//this is the work around for the array not filling for options
		var options = params['options[]']
		if(options !=null){
			params['options']=params['options[]']
		}

		
		Question.create(params, function(err, questions){
			if(err){
				completion(err, null);
				return;

			}
			completion(null, questions);
			return;

		});
	}






}

