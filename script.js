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
	
	codepen.objects.User = {
			username : null,
			password : null,
			email : null,
			name : null,
	};
		
	var newUser = Object.create(codepen.objects.User, {
		firstname: {
			writeable: true,
			enumerable: true,
			value ''
		},
		lastname: {
			writeable: true,
			enumerable: true,
			value ''
		}
	});


	// 			setLogin : function(username, password) {
	// 				this.username = username;
	// 				this.password = password;
	// 			}
	// 			setSignup : function(name, email, username, password) {
	// 				this.name;
	// 				this.email;
	// 				this.username; 
	// 				this.password;
	// 			}
	// 		}
	// };


//show/hide different fields on click
	$('.signup-form').css("display","none");
	//$('.signup-form').hide();

	$('#signup-button').click(function(){
		$('.signup-form').css('display','inline');
		//$('.signup-form').show();
		$('.login-form').css('display','none');
		//$('.login-form').hide();
		//$('.signup-form-btn').removeClass('active');
		//$('.login-form-btn').addClass('active');
	});
	
	$('#login-button').click(function(){
		$('.login-form').css('display','inline');
		//$('.signup-form').hide();
		$('.signup-form').css('display','none');
		//$('.login-form').show();
		//$('.login-form-btn').removeClass('active');
		//$('.signup-form-btn').addClass('active');
	});

	


  

//login functions
	$("#login-btn").click(function() {
		//var loginUser = {};
		//loginUser.password = $("#login-password-field").val();
		//loginUser.username = $("#login-email-field").val();
		//console.log((codepen.api.login(loginUser)));
		//alert(codepen.api.login(loginUser).error);
		var usernameinput = $("#login-email-field").val();
		var passwordinput = $("#login-password-field").val();
		var myUser = codepen.objects.newUser;
		var message = codepen.api.login(myUser);
		//var myUser = Object.create(newUser); 
		myUser.setLogin(usernameinput,passwordinput);
		
		alert(message['error']);

		return false;
	});


//signup functions
	$("#signup-btn").click(function() {
		//var signupUser = {};
		//signupUser.name = $("#login-name-field").val();
		//signupUser.email = $("#login-email-field").val();
		//signupUser.password = $("#login-password-field").val();
		//signupUser.username = $("#login-username-field").val();
		//console.log((codepen.api.login(signupUser)));
		//alert(codepen.api.signup(signupUser).error);
		//var myUser = Object.create(newUser); 
		if(response.success == true) {
				$('.signup-form .form-feedback').html("you're signed up! Go login")
		} else {
				$('.signup-form .form-feedback').html(response.error);
		}

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
