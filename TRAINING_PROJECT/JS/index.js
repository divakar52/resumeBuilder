function newuser(){
	document.getElementById('login_con').style.display="none";
	document.getElementById('signup_con').style.display="block";
	//change the message in the paragraph tag
	document.getElementById('info_msg').innerHTML="Welcome,Create your account";
}
function signup(){
	var userid=document.getElementById('s_userid').value;
	var password=document.getElementById('s_password').value;
	const authentication_obj=firebase.auth();
	firebase.auth().createUserWithEmailAndPassword(userid,password).then((success)=>{
		alert("account created successfully");
		window.location.href="index.html";
	}).catch((error)=>{
		alert("something went wrong");
	});
}
function verify(){
	//find out active user
	var user=firebase.auth().currentUser;
	//send email
	user.sendEmailVerification().then(function(){
		alert("mail sent successfully");
	}).catch(function(Error){
		alert("something went wrong");
	});
}
function logout(){
	authentication_obj.signOut();
	alert("Logout successfully");
}
function login(){
	var userid=document.getElementById('l_userid').value;
	var password=document.getElementById('l_password').value;
	
	
		const authentication_obj=firebase.auth();
		firebase.auth().signInWithEmailAndPassword(userid,password).then((success)=>{
		alert("account logged in successfully");
		}).catch((error)=>{
		alert("something went wrong");
		});

	
}
