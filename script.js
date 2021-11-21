// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declared global variables
var passLength;

var count = 0;
var randomSelection = "";

// Character Library
var upc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var low = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var int = ["1","2","3","4","5","6","7","8","9","0"];
var sym = ["!","@","#","%","^","&","*","(",")","-","_","=","+","?","<",">","[","]","{","}","|","/"];
var emo = ["🤡","🦍","🧠","👻","👽","☠️","🗿","💯","🅱️"];

// make one big array
function mergeArray(boolUpc,boolLow,boolInt,boolSym,boolEmo) {
  var charUsed = [];
  if (boolUpc) {
    charUsed = upc.concat(charUsed);
    // passString += randomChar(upc);
    // count++
  }

  if (boolLow) {
    charUsed = low.concat(charUsed);
    // passString += randomChar(low);
    // count++
  }

  if (boolInt) {
    charUsed = int.concat(charUsed);
    // passString += randomChar(int);
    // count++
  }

  if (boolSym) {
    charUsed = sym.concat(charUsed); 
    // passString += randomChar(sym);
    // count++
  }

  if (boolEmo) {
    charUsed = emo.concat(charUsed); 
    // passString += randomChar(emo);
    // count++
  } return charUsed
};

// Gather user info
function generatePassword() {
  var passString = "";
  var passLength;
  alert("Choose password settings");
  passLength = parseInt(prompt("Choose password length (8 to 128 characters)")); 
  alert("Password length set to " + passLength)
    if (passLength > 128 || passLength < 8 || passLength === null){
      alert("Invalid input. Max 128 Min 8");
      return;
    } else if (isNaN(passLength)){
      alert("Please enter a number. Max 128 Min 8")
      return;
    } else alert("Password length OK");
  
  var boolUpc = confirm("Include UPPERCASE letters?");

  var boolLow = confirm("Include lowercase letters?");

  var boolInt = confirm("Include numbers?");

  var boolSym = confirm("Include symbol characters?");
  
  var boolEmo = confirm("🤡 Include emojis? 🤡");

  if (boolUpc === false && boolLow === false && boolInt === false && boolSym === false && boolEmo === false) {
    alert("Please choose at least one option. Help me out here.");
    return;
  
  } else {
    var charUsed = mergeArray(boolUpc, boolLow, boolInt, boolSym, boolEmo);

    passString = loopFillPass(passLength, charUsed); 
  }
  return passString;
};

// random character from array
function randomChar(array) {
  console.log("print array");
  console.log(array);
  var randomSelection = array[Math.floor(Math.random() * array.length)];

  console.log("log the output of randomSelection");
  console.log(randomSelection);

  return randomSelection;
};

// loop times minus number of true user choice booleans
function loopFillPass(passLength, array) { 
  var passString = "";
  for (let i = 0; i < passLength; i++) {
  
  passString += randomChar(array);
  
  console.log("log passString");
  console.log(passString)
  console.log("iteration");
  console.log(i);
  } return passString
};

// writes password to form
function writePassword() {
  var password = generatePassword();
  console.log("log password");
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);