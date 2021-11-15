# What recources does my app need to function
 - Numbers, letters and special characters stored. The output in a string
    - list for all numbers (0-9)
    - list for all letters (a-z) caps (A-Z)
    - list for all special characters (!-*)

# What does my app need to get from the user
- for each of the following `declare` a variable
    - password length -verify length (8-128)
    - should number, lower case letters, uppercase letters,
        spec characters, emojis 🤡 button maybe?
    
    - NOTE TO SELF: `Maybe try using array value to randomly select characters? Select character using a random number generator, add to string, repeat until desired length. Maybe randomize string last for good measure. Repeat if it doesn't match requirements?` !possible bad idea!

#  What steps are needed to build a password.
- Make a list that only has the type and combination of     characters were looking for 

- make list that only has the type of characters matching the options

- randomly select a character from my list

- add our randomly selected character to out password

- repeat until password is the requested length (user imput)


// IMPORTANT FOR HOMEWORK!
var myList = ["a","b","c","d","e"]  // defines array

var indexPointer = math.floor(Math.random()*myList.length); //generates random number based on length of array

var randomSelection = myList[indexPointer];

# Password gen logic

- grab random key from charLib object 
    - exclude keys those not chosen by user
    - grab random character from array
- output character to password as string
- for loop until user spec length is reached