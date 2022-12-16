
// validation form 
function validateForm() {
  // collect form data variables by id
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var pw1 = document.getElementById("pswd1").value;
  var pw2 = document.getElementById("pswd2").value;

  if (fname.length < 4) {
    document.getElementById("blankMsg").innerHTML = "Please length must be atleast 8 characters So please enter your full name ";
    return false;
  }

  // check empty full name field
  if (fname == "") {
    document.getElementById("blankMsg").innerHTML = "Fill the Full Name";
    return false;
  }
  //character data validation
  if (!isNaN(fname)) {
    document.getElementById("blankMsg").innerHTML = "Only characters are allowed";
    return false;
  }

  // check empty email field 
  if (email == "") {
    document.getElementById("charMsg").innerHTML = "Fill the Email";
    return false;
  }

  //character data validation email 
  if (!isNaN(email)) {
    document.getElementById("charMsg").innerHTML ="Only characters are allowed";
    return false;
  }


  //check empty password field
  
  if(pw1 == "") {  
    document.getElementById("message1").innerHTML = "**Fill the password please!";  
    return false;  
  } 
  if(pw2 == "") {  
    document.getElementById("message2").innerHTML = "**Enter the password please!";  
    return false;  
  }   
  //minimum password length validation
  if (pw1.length < 5) {
    document.getElementById("message1").innerHTML = "Password length must be atleast 8 characters";
    return false;
  }
  //maximum length of password validation
  if (pw1.length > 15) {
    document.getElementById("message1").innerHTML = "Password length must not exceed 15 characters";
    return false;
  }
   
  //check empty confirm password field
  if (pw2 == "") 
  {
    document.getElementById("message2").innerHTML = "Enter the password please!";
    return false;
  }
  //check if password1 not equle password2
  if (pw1 != pw2) 
  {
    document.getElementById("message2").innerHTML = "Password are not same";
    return false;
  }


  // var emailcharaters = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  // if (emailcharaters.test(email)) 
  // {
  //   return true;
  // } else
  //  {
  //   document.getElementById("charMsg").innerHTML = "Bad email address '" + email +" "+"pleas enter your email";
  //   return false;
  // }

 } 


 function AddData()
{
    var fname = document.getElementById("fname").value;
	var email = document.getElementById("email").value;
    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;


 localStorage.setItem('name',fname);
 localStorage.setItem('Email',email);
 localStorage.setItem('Password',pw1);
 localStorage.setItem('Password',pw2);


}


function validateF(){
  var email = document.getElementById("email").value;
  var emailcharaters = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (emailcharaters.test(email)) 
    {
      return true;
    } else
     {
      document.getElementById("charMsg").innerHTML = "Bad email address '" + email +" "+"pleas enter your email";
      return false;
    }
  
  }






//test -> btrg3 true false e3ni hina wallahy hishof email f3ln feh kol aly  fe pattern hirg true mafish false








//check empty password field  
// if(pw1 == "") {  
//   document.getElementById("message1").innerHTML = "**Fill the password please!";  
//   return false;  
// }  

// //check empty confirm password field  
// if(pw2 == "") {  
//   document.getElementById("message2").innerHTML = "**Enter the password please!";  
//   return false;  
// }   
 
// //minimum password length validation  
// if(pw1.length < 8) {  
//   document.getElementById("message1").innerHTML = "**Password length must be atleast 8 characters";  
//   return false;  
// }  

// //maximum length of password validation  
// if(pw1.length > 15) {  
//   document.getElementById("message1").innerHTML = "**Password length must not exceed 15 characters";  
//   return false;  
// }  

// if(pw1 != pw2) {  
//   document.getElementById("message2").innerHTML = "**Passwords are not same";  
//   return false;  
// } else {  
//   alert ("Your password created successfully");  
//   document.write("JavaScript form has been submitted successfully");  
// }  
