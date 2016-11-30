function chkForm(){
var firstName = document.getElementById("firstName");

var lastName = document.getElementById("lastName");

var emailAddress = document.getElementById("emailAddress");

var telephoneNumberFirst3 = document.getElementById("telephoneNumberFirst3");

var telephoneNumberMiddle3 = document.getElementById("telephoneNumberMiddle3");

var telephoneNumberLast4 = document.getElementById("telephoneNumberLast4");

var fName = firstName.value.search(/[A-Za-z]/g);
var lName = lastName.value.search(/[A-Za-z]/g);
var fPN = telephoneNumberFirst3.value.search(/[0-9]{3}/g);
var mPN = telephoneNumberMiddle3.value.search(/[0-9]{3}/g);
var lPN = telephoneNumberLast4.value.search(/[0-9]{4}/g);
    var empos = emailAddress.value.search(/^\w+@\w{5,}\.[a-z]{2,}$/);


  if (fName != 0) {

    alert("The first name needs to have letters!");

    firstName.focus();
    firstName.select();
    return false;

  } 
  else if (lName != 0) {

    alert("The last name needs to have letters!");

    lastName.focus();
    lastName.select();
    return false;

  }
    
    else if(empos != 0){
            alert("You have entered an invalid email. \n"+
                 "The correct form is example@email.com");
		emailAddress.focus();            
		emailAddress.select();
		return false;
            }  
  else if (fPN != 0) {

    alert("The phone number must be all numbers");

    telephoneNumberFirst3.focus();
    telephoneNumberFirst3.select();
    return false;

  } 
  else if (mPN != 0) {

    alert("The phone number must be all numbers");

    telephoneNumberMiddle3.focus();
    telephoneNumberMiddle3.select();
    return false;

  } 
  else if (lPN != 0) {

    alert("The phone number must be all numbers");

    telephoneNumberLast4.focus();
    telephoneNumberLast4.select();
    return false;

  } 

else
{
	   return true;
}
}


