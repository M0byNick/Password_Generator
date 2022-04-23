// Assignment Code
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numList = "0123456789"
const symbList = "!@#$%^&*()-+="

var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var passLength = parseInt(prompt("Length of desired password?"))
  console.log(passLength)
  
  var totalString = ""
  var newPassword = ""

  if(passLength <8){
  //alert("Not long enough")
    return "Please try a password length between 8-128 characters";
  }
  else if(passLength >128){
    return "Please try a password length between 8-128 characters";
  }
  else if(isNaN(passLength)){
    return "Please input a valid number"
  }
  
  var isLower = confirm("Include lowercase letters?")
  var isUpper = confirm("Include uppercase letters?")
  var isNum = confirm("Include numbers?")
  var isSymb = confirm("Include special characters?")

  if(isLower === false && isUpper === false && isNum === false && isSymb === false){
    return "Please select at least one character type"
  }
  if(isLower){
    totalString = totalString.concat(lowerAlpha)
  }
  if(isUpper){
    totalString = totalString.concat(upperAlpha)
  }
  if(isNum){
    totalString = totalString.concat(numList)
  }
  if(isSymb){
    totalString = totalString.concat(symbList)
  }
  console.log(totalString)

  const possibleCharArray = totalString.split("")
  console.log(possibleCharArray)

  for(let i = 0; i < passLength; i++){
    let index = Math.floor(Math.random() * possibleCharArray.length)
    let digit = possibleCharArray[index]
    newPassword += digit
  }

  return newPassword
}

// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
