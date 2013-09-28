/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/

$('document').ready(function() {
	
	codepen.objects= {};
	var newUser = {
		username : null,
		password : null,
		email : null,
		name : null
	
		setLogin : function(username, password) {
			this.username = username;
			this.password = password;
		}
		setSignup : function(name, email, username, password) {
			this.name;
			this.email;
			this.username; 
			this.password;
		}
	};
//show/hide different fields on click
	$('.signup-form').css("display","none");

	$('#signup-button').click(function(){
		$('.signup-form').css('display','inline');
		$('.login-form').css('display','none');
	});
	console.log("hi");
	$('#login-button').click(function(){
		$('.login-form').css('display','inline');
		$('.signup-form').css('display','none');
	});
  

//login functions
	$("#login-btn").click(function() {
		var usernameinput = $("#login-email-field").val();
		var passwordinput = $("#login-password-field").val();
		var myUser = codepen.objects.newUser;
		
		myUser.setLogin(usernameinput,passwordinput);	
		
		var message = codepen.api.login(myUser);
		
		alert(message['error']);

		return false;
	});


//signup functions
	$("#signup-btn").click(function() {
		var nameinput 		= $('#signup-name-field').val();
		var emailinput 		= $('#signup-email-field').val();
		var usernameinput 	= $('#signup-username-field').val();
		var passwordinput 	= $('#signup-password-field').val();
		var myUser = codepen.objects.newUser; 
		
		myUser.setSignup(nameinput,emailinput,usernameinput,passwordinput);

		alert(message['error']);

		return false;
	});


});