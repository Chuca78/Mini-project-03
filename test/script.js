

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// Assignment Code
// var generateBtn = document.querySelector("#generate");


// function generatePassword(){
//     var str = "";
//     var numbers = "0123456789";
//     var lower = "abcdefghijklmnopqrstuvwxyz";
//     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//     var chars = str.concat(numbers, lower, upper, special);
//     console.log(chars);
    
    
//     var passLength = function() {
//     // Ask user for their choice
//     var lengthChoice = window.prompt("Password length (between 8 and 128 characters):");
//     // If user chooses outside of length requirements, prompt for correct length
//     if (lengthChoice < 8 || lengthChoice > 128) {
//         window,alert("Does not meet length requirement")
//         passLength();
//     }
//     else{
//       window.alert("Password length: " + lengthChoice);
//       console.log(lengthChoice);
//     }

  
//   // todo: write random generator function
  

//   for (var i = 0; i <= lengthChoice; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber +1);
//     console.log(password);
//    }
// }
// }

// user prompts for password length and character selection
// working code
var passLength = function() {
    // Ask user for their choice
    var lengthChoice = window.prompt("Password length (between 8 and 128 characters):");
    // If user chooses outside of length requirements, prompt for correct length
    if (lengthChoice < 8 || lengthChoice > 128) {
        window,alert("Does not meet length requirement")
        passLength();
    }
    else{
      window.alert("Password length: " + lengthChoice);
    }
}
// Ask user for their character choice
var characterType = function() {
    
    var characters = ["lower", "upper", "numbers", "special"]
    for (let index = 0; index < characters.length; index++) {
        const element = characters[index];
        console.log(element);

        var characterChoice = window.prompt("Include: " + element + " ?  (y/n)");
        if (characterChoice === "yes" ||
            characterChoice === "y"){
            window.alert("Characters included: " + element);
        }
        else if(characterChoice === "no"||
                characterChoice === "n"){
                window.alert("Characters not included: " + element)
        }
        else{
            window.alert("Not a valid choice")
            characterType();
        }
    }
}

function generatePassword(){
    var str = "";
    var numbers = "0123456789";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var chars = str.concat(numbers, lower, upper, special);
    console.log(chars);
}

// todo: tie passLength and characterType functions to the writePassword function
// Write password to the #password input
// function writePassword(){
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


passLength()
characterType()
generatePassword()
