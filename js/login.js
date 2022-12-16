



function validation(){
	var Password = localStorage.getItem('Password')
	var email = localStorage.getItem('Email')
	var input_email = document.getElementById("email");
	var input_password = document.getElementById("pass");

	// if(input_email!=email){
    //     alert("Wrong Email")
	// 	return false;
	// }
	//  else if(input_password!=Password){
	// 	alert("Wrong password")
	// 	return false;
	// }
	// else{
    // alert("form submitted successfully")
	// // localStorage.setItem("login",true);
	// // window.open("index.html");
	// 	return true;

	// }
	if (email==input_email.value && Password==input_password.value){
		alert("form submitted successfully")
	localStorage.setItem("login",true);
	window.open("index.html");
		return true;
	}
	else if(input_email.value!=email){
		    alert("Wrong Email")
			return false;
		}
		else if(input_password.value!=Password){
				alert("Wrong password")
				return false;
			}
}