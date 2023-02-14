// Assignment code here
const number = "1234567890";
const symbol = "!@#$%^&*";
const alphabetLower = "abcdefghijklmnopqrstuvwxyz"
const alphabetCap = alphabetLower.split("").map((char) => char.toUpperCase()).join("")



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function random (data){
    return data[Math.floor(Math.random() * data.length)]
}

function generatePassword(){
    var password= ""
    var passwordOptions = ""

    var passwordLength = parseInt(prompt("How many characters do you want your password to be?"))
    console.log(passwordLength)
    while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Please choose a number between 8 - 128 "))
    }

    var includeNumber = confirm("If you want your password to include numbers press OK")
    var includeSymbol = confirm("If you want your password to include symbols press OK")
    var includeAlphabetLower = confirm("If you want your password to include lower case letters press OK")
    var includeAlphabetCap = confirm("If you want your password to include upper case letters press OK")



    if(includeNumber){
        passwordOptions += number
        password += random(number)
        console.log(passwordOptions, password)
    }

    if(includeSymbol){
        passwordOptions += symbol
        password += random(symbol)
        console.log(passwordOptions, password)
    }

    if(includeAlphabetLower){
        passwordOptions += alphabetLower
        password += random(alphabetLower)
        console.log(passwordOptions, password)
    }

    if(includeAlphabetCap){
        passwordOptions += alphabetCap
        password += random(alphabetCap)
        console.log(passwordOptions, password)
    }

    

    for (let i = password.length; i < passwordLength; i++) {
        password += random(passwordOptions)        
    }

    return password

}
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);

