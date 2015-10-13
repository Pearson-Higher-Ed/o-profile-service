
const Xhr = require("o-xhr")


function ProfileService(url, token){
	this.url = url;
	this.token = token;

	return this;
}

function noop(){}

ProfileService.prototype.getProfile = function(id, callback){
	callback = callback || noop;
	new Xhr({
			url: this.url+"/userprofiles/"+id,
			onSuccess: function(request){
				callback(null, request.responseText);
			},
			onError: function(err){
				callback(err, null);
			},
			headers:{
				"x-authorization": this.token,
					"Content-Type": "application/json",
					"Accept": "application/json"
			}
		});  // end xhr
	};
// profileService.setProfile(id, data, callback){
//
//
//
// }
//




// new Xhr({
// 		url: "http://odev:3002",
// 		onSuccess: function(request){
// 			console.log(request.responseText);
// 		}
// });



module.exports = ProfileService;