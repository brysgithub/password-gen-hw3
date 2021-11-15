// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var passLength = 8;
var contUpc = false;
var contLow = false;
var contSym = false;
var contNum = false;
var contEmo = false;

// Character Library
var charLib = {
  upc: ["A","B","C"],
  low: ["a","B","c"],
  num: ["1","2","3"],
  sym: ["!","@","#"],
  emo: ["🤡","🦍","🍆"],
};

// User input prompts
function generatePassword() {
  alert("Choose your password settings!");
  passLength = prompt("Choose password length (8 to 128 characters) Default 8");
    // find a way to kick user back to passLength input
    if (passLength <= 8 && passLength >= 128){
      console.log("bad pass length")
    } else { 
      
    }
  contUpc = confirm("Include UPPERCASE letters?");
  contLow = confirm("Include lowercase letters?");
  contNum = confirm("Include numbers?");
  contSym = confirm("Include symbol characters?");
  contEmo = confirm("🤡 Include emojis? 🤡");
  // var indexPointer = math.floor(math.random()*myList.length);
  // var randomSelection = myList[indexPointer];
}

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
