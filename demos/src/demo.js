/*global require*/
var component = require('../../main');

var UProfileService = component.UserProfileService;

console.log(UProfileService);

// var ProfileService = component.foo();
const service = new UProfileService("http://odev:3002","eyJhbGciOiJSUzUxMiIsImtpZCI6ImsxMDY5NDgxOTAifQ.eyJleHAiOjE0NDQ0MzI5MTIsInN1YiI6ImZmZmZmZmZmNTRjNmM1MjJlNGIwN2YxN2UxNzk2ZjVhIiwic2Vzc2lkIjoiYWEwMTlhOWE5MTQyNGZkZTgxYzQ4OTdkYWM4YzdlYTQiLCJ0eXBlIjoiYXQiLCJpYXQiOjE0NDQ0MjIxMTJ9.XbPcWu-mInGhOITRGJKL8VAnwvQbq7-NQd4D5W2iGBXbtmvKpHNyYiQZx_0NoDp5s3sTJwzKe91dvtI4vjdAeEHoYbc462KcHRUfae2CYAnE-nFfzMfiHJjGL23z2M0BScrqn6gND0otxEu2Gn26o1FxpRhac17vbnAGCDVLi3U");


document.addEventListener("DOMContentLoaded", function() {



	// var service = new ProfileService("http://odev:3002", token);

	// service.getProfile("ffffffff558331e6e4b048b1c216a39a",callback);  // end getProfile

	document.dispatchEvent(new CustomEvent('o.DOMContentLoaded'));
});

document.addEventListener("click", function(){

	var token = document.getElementById('htmlToken').value;
	var piid = document.getElementById('htmlPIid').value
	var avatarFile =document.getElementById("avatarUpload").files[0];
	service.token = token;
	console.log("myToken is: "+ token)
	console.log("pd is: "+ piid)
	console.log("file is: "+ avatarFile.name)
	service.getProfile(piid,callback);
	service.setAvatar(piid,avatarFile, updateCallback);
});

function updateCallback(err,text){
	if(err != null){
		console.error("There has been an error setting profile: "+ err.responseText)
		return;


	}
	console.log("sucesss");
}

function callback(err, text){
	if(err != null){
		console.error("There has been an error getting profile: "+ err.responseText)
		return;
	}
	var profileData = {};
	try {
		profileData = JSON.parse(text);
	}
	catch(e){
		console.error(e, "profile json not well formed: "+ text);
	}

	console.log(profileData);

	document.getElementById('myName').textContent = profileData.firstName + profileData.lastName;
	document.getElementById('myEmail').textContent= profileData.email
	document.getElementById('myEmail2').textContent= profileData.email
	document.getElementById('myBio').textContent= profileData.aboutMini
	document.getElementById('myAvatar').src = profileData.avatar

	profileData.aboutMini += "X";// add an X to the bio just to watch the update work
	service.setProfile(profileData.id,JSON.stringify(profileData), updateCallback);
}
