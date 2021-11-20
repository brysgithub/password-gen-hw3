// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declared global variables
var passLength;
var boolUpc;
var boolLow;
var boolSym;
var boolInt;
var boolEmo;

var trueAnswers = [boolUpc, boolLow, boolSym, boolInt, boolEmo];


// Character Library
var upc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var low = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var int = ["1","2","3","4","5","6","7","8","9","0"];
var sym = ["!","@","#","%","^","&","*","(",")","-","_","=","+","?","<",">","[","]","{","}","|","/"];
var emo = ["🤡","🦍","🧠","👻","👽","☠️","🗿","💯","🅱️"];

var charUsed = [];
var passString = "";

// make one big array
function mergeArray() {
  if (boolUpc) {
    charUsed = upc.concat(charUsed);
    passString += randomChar(upc);
  }

  if (boolLow) {
    charUsed = low.concat(charUsed);
    passString += randomChar(low);
  }

  if (boolInt) {
    charUsed = int.concat(charUsed);
    passString += randomChar(int);
  }

  if (boolSym) {
    charUsed = sym.concat(charUsed); 
    passString += randomChar(sym);
  }

  if (boolEmo) {
    charUsed = emo.concat(charUsed); 
    passString += randomChar(emo);
  }
}

// Gather user info
function generatePassword() {
  alert("Choose password settings");
  passLength = parseInt(prompt("Choose password length (8 to 128 characters)")); 
  alert("Password length set to " + passLength)
    if (passLength > 128 || passLength < 8 || passLength === null){
      alert("Invalid input. Max 128 Min 8");
      return;
    } else if (isNaN(passLength) === true){
      alert("Please enter a number. Max 128 Min 8")
      return;
    } else alert("Password length OK");
  boolUpc = confirm("Include UPPERCASE letters?");
  boolLow = confirm("Include lowercase letters?");
  boolInt = confirm("Include numbers?");
  boolSym = confirm("Include symbol characters?");
  boolEmo = confirm("🤡 Include emojis? 🤡");
    if (boolUpc === false && boolLow === false && boolInt === false && boolSym === false && boolEmo === false) {
      alert("Please choose at least one option. Help me out here.");
      return;
    } else mergeArray(); randomChar(charUsed); // loopFillPass(charUsed);

    return passString;
};

console.log(passString)
console.log(mergeArray)

// random character from array
function randomChar(array) {
  var indexPointer = Math.floor(Math.random() * array.length);
  var randomSelection = array[indexPointer];
  return randomSelection;
};

// loop times minus number of true user choice booleans
function loopFillPass(array) { 
  var addTrue = trueAnswers.filter(Boolean).length;
  console.log(addTrue)
  // for (let i = 0 + addTrue; i < array.length; i++) {
  // const element = array[i];
  
  //}
}
// writes password to form
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);