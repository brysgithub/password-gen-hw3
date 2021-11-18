// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declare variables
var passLength;
var boolUpc;
var boolLow;
var boolSym;
var boolInt;
var boolEmo;

// TODO: concat chosen arrays into avalable character array. Or push character library arry to chosenChar
// Character Library
var upc = ["A","B","C"];
var low = ["a","B","c"];
var int = ["1","2","3"];
var sym = ["!","@","#"];
var emo = ["🤡","🦍","🧠"];

// var chosenChar = [];

// Gather user info
function userOptions() {
  alert("Choose password settings");
  passLength = parseInt(prompt("Choose password length (8 to 128 characters)")); 
  alert("Password length set to " + passLength)
    if (passLength > 128 || passLength < 8 || passLength === null){
      alert("Invalid input. Max 128 Min 8");
      return;
    } else if (isNaN(passLength) === true){
      alert("Please enter a number. Max 128 Min 8");
      return
    } else alert("Password length OK")
  boolUpc = confirm("Include UPPERCASE letters?");
  boolLow = confirm("Include lowercase letters?");
  boolInt = confirm("Include numbers?");
  boolSym = confirm("Include symbol characters?");
  boolEmo = confirm("🤡 Include emojis? 🤡");
    if (boolUpc === false && boolLow === false && boolInt === false && boolSym === false && boolEmo === false) {
      alert("Please choose at least one option! Jeeze.");
      return;
    };

    var passOptions = {
      passLength: passLength,
      boolUpc: boolUpc,
      boolLow: boolLow,
      boolInt: boolInt,
      boolSym: boolSym,
      boolEmo: boolEmo
    };
    return passOptions;
      // console.log(passOptions);
    
  } 

function randomChar(array) {
  var indexPointer = Math.floor(Math.random()*array.length);
  var randomSelection = array[indexPointer];
  return randomSelection;
};

// User input prompts
function generatePassword() {
  var userInput = userOptions();
  var passMem = [];
  var charBanked = [];
  var charSelected = [];
  if (userInput.boolUpc) {
    charBanked = charBanked.concat(boolUpc);
    charSelected.push(randomChar(boolUpc));
  }
  
  if (userInput.boolLow) {
    charBanked = charBanked.concat(boolLow);
    charSelected.push(randomChar(boolLow));
  }
  
  if (userInput.boolInt) {
    charBanked = charBanked.concat(boolInt);
    charSelected.push(randomChar(boolInt));
  }
  
  if (userInput.boolSym) {
    charBanked = charBanked.concat(boolSym);
    charSelected.push(randomChar(boolSym));
  }
  
  if (userInput.boolEmo) {
    charBanked = charBanked.concat(boolEmo);
    charSelected.push(randomChar(boolEmo));
  }
  for (let index = 0; index < userInput.length; index++) {
    const charsBanked = randomChar(charBanked);
    passMem.push(charsBanked);
  } 

  for (let index = 0; index < charSelected.length; index++) {
    passMem[index] = charSelected[index];
    
  }

  return passMem.join("");

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