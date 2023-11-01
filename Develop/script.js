// Assignment code here

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F" ,"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "_", "<", ">", "?", "/", ";", ":", "~", "`", "[", "]", "{", "}", "|"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
// Add event listener to generate password button
generateBtn.addEventListener("click", writePassword);

//sets up function/array to collect speficiations for password
function generatePassword() { 
    var passwordArray = [];
    var passwordLength = Number(prompt("Enter desired length of password (Between 8-128 characters)"));
    if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("ERROR: Please enter a password length between 8-128");
    };

//specifications for password
    var addNums = confirm("Would you like to add numbers?");
    var addUppercase = confirm("Would you like to include uppercase leters?");
    var addLowercase = confirm("Would you like to include lowercase letters?");
    var addSpecials = confirm("Would you like to include special characters?");

    if (!addNums && !addLowercase && !addUppercase && !addSpecials) {
        alert("ERROR: You must select one of the options")
    };

//adds specified arrays into main array(generated password)
    if (addNums) {
        passwordArray = passwordArray.concat(numbers)};
    if (addLowercase) {
        passwordArray = passwordArray.concat(lowerCase)};
    if (addUppercase) {
        passwordArray = passwordArray.concat(upperCase)};
    if (addSpecials) {
        passwordArray = passwordArray.concat(specialChar)};
    
    // var arrayLength = passwordArray.length;
    var password = [];
    for (var i=0; i<passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * passwordArray.length);
        randomChar = passwordArray[randomIndex];
        password.push(randomChar);
    }
    return password.join("");
}
