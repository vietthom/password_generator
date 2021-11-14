// Assignment Code
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

//create input variables
let userInputs= [];
let passwordLength= "";
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; 
const nums= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "~",
  "`",
  "[",
  "{",
  "}",
  "]",
  "\\",
  "|",
  ";",
  ":",
  "'",
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
];

function generatePassword(){
  passwordLength = prompt('Please chose a password length of 8 to 128 characters');
  if (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Password length must be 8 to 128 characters");
  }else{
    let addNumbers = confirm("Would you like to add numbers to your password?");{
      if (addNumbers){
        userInputs= userInputs.concat(nums);
      }
    }
    let addUpperCase = confirm("Would you like to add uppercase letters to your password?");
    if(addUpperCase){
      userInputs = userInputs.concat(upperCase);
    }
    let addLowerCase = confirm("Would you like to add lowercase letters to your password");
    if(addLowerCase){
      userInputs = userInputs.concat(lowerCase);
    }
    let addSpecialCharacters = confirm("Would you like to add special characters to your password?");
    if(addSpecialCharacters){
      userInputs = userInputs.concat(specChar);
    }
    if (!addNumbers && !addUpperCase && !addLowerCase && !addSpecialCharacters){
      alert('No password created');
    };
    let result = '';
    for(let i=0; i < passwordLength; i++){
      result = result + userInputs[Math.floor(Math.random() * userInputs.length)];
      console.log(result);
    }
    return result;
    
  }

};
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button





//GIVEN I need a new, secure password

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

//We need an eventlistener to generate a series of propt when we click a button we get a prompt for password criterias

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected



//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page




