// Assignment code here

  var responsePassword = window.confirm("Should the password include lowercase, uppercase, numeric, and/or special characters");
  if (responsePassword) {
   var charsResponse = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else
  var charsResponse = "0123456789abcdefghijklmnopqrstuvwxyz";
  ;

  var generateBtn = document.querySelector("#generate");
  var lengthPassword = window.prompt("Insert password lenght between 8 characters and no more than 128 characters");
  lengthPassword = parseInt(lengthPassword);
  
  if (lengthPassword>128 ){
  alert("Please insert a value less than 128");
  generateBtn.disabled=true;
}

else if (lengthPassword<8){
  alert("Please insert a value greater than 8");
  generateBtn.disabled=true;
}


function generatePassword() {
  var chars = charsResponse;
  var promptLenght = lengthPassword-1;
  var password = "";
for (var i = 0; i <= promptLenght; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);