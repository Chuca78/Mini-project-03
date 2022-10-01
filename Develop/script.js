
// todo: clean up indentations and formatting

// Assignment Code
var generateBtn = document.querySelector("#generate");

// user prompt for password length
function generatePassword(lengthChoice) {
    // Ask user for their choice
    var lengthChoice = window.prompt("Password length? (between 8 and 128 characters):");
    // If user chooses outside of length requirements, prompt for correct length and restart function
    if (lengthChoice < 8 || lengthChoice > 128) {
        window.alert("Does not meet length requirement")
        generatePassword();
    }
    else{
      window.alert("Password length: " + lengthChoice);
    }

    if (lengthChoice){
        // todo: clean up this section
  // Ask user for their character choice
    // var characterType = function() {
        // var characters = ["lower", "upper", "numbers", "special"]
        // for (let index = 0; index < characters.length; index++) {
        //     const element = characters[index];
        //     console.log(element);

            var numberChar = confirm("Include numbers?");
                // window.alert("Characters included: numbers");
            var lowerChar = confirm("Include lowercase?");
                // window.alert("Characters included: lowercase");
            var upperChar = confirm("Include uppercase?");
                // window.alert("Characters included: uppercase");
            var specialChar = confirm("Include special characters?");
                // window.alert("Characters included: special");
            // }
    }

  // conditional to check that user selects at least one character type
  if ([specialChar, numberChar, lowerChar, upperChar].includes(true))


//   todo: rename arrays
    //Array to store types of characters to include in password
    var chosenChar = [];

    //Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedChar = [];

//   todo: refactor and simplify
  //Conditional statements that add array of each type of character into array of possible characters based on user input and pushes new random character to guaranteedCharacters.
  if (specialChar) {
    chosenChar = chosenChar.concat(special);
    guaranteedChar.push(
      special[Math.floor(Math.random() * special.length)]
    );
  }
  if (numberChar) {
    chosenChar = chosenChar.concat(numbers);
    guaranteedChar.push(
        numbers[Math.floor(Math.random() * numbers.length)]
    );
  }
  if (lowerChar) {
    chosenChar = chosenChar.concat(lowercase);
    guaranteedChar.push(
        lowercase[
        Math.floor(Math.random() * lowercase.length)
      ]
    );
  }
  if (upperChar) {
    chosenChar = chosenChar.concat(uppercase);
    guaranteedChar.push(
        uppercase[
        Math.floor(Math.random() * uppercase.length)
      ]
    );
  }

//   todo: rename and refactor
  //For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  var randomChar = [];

//   todo: fix length of password
  for (var i = 0; i < lengthChoice; i++) {
    var index = Math.floor(Math.random() * chosenChar.length);
    randomChar.push(chosenChar[index]);
  }
  var replacedPosition = {};
  //While loop to ensure an index position that has already been replaced with a guaranteed character is not replaced with another guaranteed character.
  while (guaranteedChar.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomChar.length);
    if (!replacedPosition[replaceChar]) {
      randomChar[replaceChar] = guaranteedChar.pop();
      replacedPosition[replaceChar] = true;
    }
  }
  return randomChar.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// arrays of the characters
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","\\","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
