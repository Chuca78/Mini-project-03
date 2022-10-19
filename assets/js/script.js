
// Assignment Code
var generateBtn = document.querySelector("#generate");

// user prompted for password length
function generatePassword(lengthChoice) {
// Ask user for their choice
var lengthChoice = window.prompt("Password length? (between 8 and 128 characters):");
// if user chooses outside of length requirements, prompts for correct length and restart function
if (lengthChoice < 8 || lengthChoice > 128) {
  window.alert("Does not meet length requirement")
  generatePassword();
}
else{
  window.alert("Password length: " + lengthChoice);
}

if (lengthChoice){
// user prompted for their character choices
  var numberChar = confirm("Include numbers?");
  var lowerChar = confirm("Include lowercase?");
  var upperChar = confirm("Include uppercase?");
  var specialChar = confirm("Include special characters?");
}

// checks that user selects at least one character type
if ([specialChar, numberChar, lowerChar, upperChar].includes(true));
else{
  window.alert("You must choose at least one character type");
  generatePassword();
}

//  stores types of characters user selected for password
var passChar = [];

//  adds each type of selected characters into a single array
if (specialChar) {
  passChar = passChar.concat(special);
}
if (numberChar) {
  passChar = passChar.concat(numbers);
}
if (lowerChar) {
  passChar = passChar.concat(lowercase);
}
if (upperChar) {
  passChar = passChar.concat(uppercase);
}

// for loop iterates over array of selected characters and randomizes characters into a random password
var randomChar = [];
for (var i = 0; i < lengthChoice; i++) {
  var index = Math.floor(Math.random() * passChar.length);
  randomChar.push(passChar[index]);
}
return randomChar.join("");
}

// writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// event listener to generate button
generateBtn.addEventListener("click", writePassword);

// arrays of the character types
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","\\","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];