// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declared global variables
var passLength;
var boolUpc;
var boolLow;
var boolSym;
var boolInt;
var boolEmo;

// Character Library
var upc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var low = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var int = ["1","2","3","4","5","6","7","8","9","0"];
var sym = ["!","@","#","%","^","&","*","(",")","-","_","=","+","?","<",">","[","]","{","}","|","/"];
var emo = ["🤡","🦍","🧠","👻","👽","☠️","🗿","💯","🅱️"];

// Gather user info
function userOptions() {
  alert("Choose password settings");
  passLength = parseInt(prompt("Choose password length (8 to 128 characters)")); 
  alert("Password length set to " + passLength)
    if (passLength > 128 || passLength < 8 || passLength === null){
      alert("Invalid input. Max 128 Min 8");
      return;
    } else if (isNaN(passLength) === true){
      alert("Please enter a number. Max 128 Min 8")
      return;
    } else alert("Password length OK")
  boolUpc = confirm("Include UPPERCASE letters?");
  boolLow = confirm("Include lowercase letters?");
  boolInt = confirm("Include numbers?");
  boolSym = confirm("Include symbol characters?");
  boolEmo = confirm("🤡 Include emojis? 🤡");
    if (boolUpc === false && boolLow === false && boolInt === false && boolSym === false && boolEmo === false) {
      alert("Please choose at least one option. Help me out here.");
      return;
    };
    
    // User options object
    var passOptions = {
      passLength: passLength,
      boolUpc: boolUpc,
      boolLow: boolLow,
      boolInt: boolInt,
      boolSym: boolSym,
      boolEmo: boolEmo
    };
    return passOptions;
    
  } 

// random character from array
function randomChar(array) {
  var indexPointer = Math.floor(Math.random() * array.length);
  var randomSelection = array[indexPointer];
  return randomSelection;
};

// choose characters from user input keys in passOptions and push into array
function generatePassword() {
  var userInput = userOptions();
  var passMem = [];
  var charBanked = [];
  var charSelected = [];
  if (userInput.boolUpc) {
    charSelected = charBanked.concat(upc);
    charSelected.push(randomChar(passMem));
  }
  
  if (userInput.boolLow) {
    charSelected = charBanked.concat(low);
    charSelected.push(randomChar(passMem));
  }
  
  if (userInput.boolInt) {
    charSelected = charBanked.concat(int);
    charSelected.push(randomChar(passMem));
  }
  
  if (userInput.boolSym) {
    charSelected = charBanked.concat(sym);
    charSelected.push(randomChar(passMem));
  }
  
  if (userInput.boolEmo) {
    charSelected = charBanked.concat(emo);
    charSelected.push(randomChar(passMem));
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

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);