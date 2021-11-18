// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var passLength = 8;
var boolUpc = false;
var boolLow = false;
var boolSym = false;
var boolInt = false;
var boolEmo = false;

// TODO: concat chosen arrays into avalable character array. Or push character library arry to chosenChar
// Character Library
var upc = ["A","B","C"];
var low = ["a","B","c"];
var num = ["1","2","3"];
var sym = ["!","@","#"];
var emo = ["🤡","🦍","🍆"];

var chosenChar = [];

// Generate random character
function generateCaracter() {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
}
// User input prompts
function generatePassword() {
  alert("Choose password settings");
  passLength = prompt("Choose password length (8 to 128 characters) Default 8"); 
  alert("Password length set to " + passLength)
    if (passLength >= 128 && passLength <= 8){
      alert("Password is out of parameters");
    } else alert("Pass length OK")
    // find a way to kick user back to passLength input
  boolUpc = confirm("Include UPPERCASE letters?");
  boolLow = confirm("Include lowercase letters?");
  boolInt = confirm("Include numbers?");
  boolSym = confirm("Include symbol characters?");
  boolEmo = confirm("🤡 Include emojis? 🤡");

};

// Generate random output from array 
// var myList = ["a","b","c","d","e"]  // defines array Make myList 

// var indexPointer = math.floor(math.random()*myList.length); //generates random number based on length of array

// var randomSelection = myList[indexPointer];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);