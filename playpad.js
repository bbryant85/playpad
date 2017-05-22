var firstName = "Budree";
var lastName = "Bryant";
var fullName = firstName + " " +
lastName;
console.log("Your first name is " + firstName.toUpperCase());
console.log("Your last name is" + lastName);
console.log("Your full name is" + fullName);

var yourName = prompt("What is your name?");
if(yourName.toLowerCase() === firstName.toLowerCase()){alert('Hey I think i know you! You are ' + yourName );}
else {alert('Oh nice to meet you');}
