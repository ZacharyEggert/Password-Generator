// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate the password
function generatePassword() {
  
  // Variable declarations
  var thisLetterSet = 0;
  var thisLetter = "";
  var returnable = "";

  // Static variable declarations
  // Generates Arrays from Strings
  var _LOWERCASE = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase());
  var _UPPERCASE = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var _NUMBER = Array.from("0123456789");
  var _SPECIAL = Array.from("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

  // Get password length
  var length = prompt("PASSWORD LENGTH?\n(8 - 128)");
  // Check for valid length
  if(length<8 || length>128 || isNaN(length)){
    alert("INVALID CHOICE. CHOOSE A NUMBER BETWEEN 8 AND 128.");
  }else{

    // Get user options
    var enableLowercase = confirm("ALLOW LOWERCASE?")
    var enableUppercase = confirm("ALLOW UPPERCASE?")
    var enableNumeric = confirm("ALLOW NUMBERS?")
    var enableSpecial = confirm("ALLOW SPECIAL CHARACTERS?")

    // Backend logging for debug purposes
    // if(enableLowercase){console.log("lowercase enabled");}
    // if(enableUppercase){console.log("uppercase enabled");}
    // if(enableNumeric){console.log("numbers enabled");}
    // if(enableSpecial){console.log("special charaters enabled");}

    // Check for valid keygen rules
    if(!enableLowercase&&!enableUppercase&&!enableNumeric&&!enableSpecial){
      alert("INVALID CHOICE. CHOOSE AT LEAST ONE CHARACTER TYPE.");
    }else{

      // Build password letter by letter
      while(returnable.length<length){

        // Log iteration count for debug purposes
        //console.log("Starting iteration " + i);

        // Generate random number to determine letterset
        thisLetterSet = Math.floor(Math.random() * 4);

        // Check for valid random number against lettersets
        if(
        (thisLetterSet === 0 && enableLowercase)||
        (thisLetterSet === 1 && enableUppercase)||
        (thisLetterSet === 2 && enableNumeric)||
        (thisLetterSet === 3 && enableSpecial)
        ){
          // Log letterset for debug purposes
          //console.log(thisLetterSet);

          // Switch case to handle each letterset
          // Generates a random number corresponding to the letter arrays
          switch(thisLetterSet){
            case 0 :
              thisLetter = _LOWERCASE[Math.floor(Math.random()*_LOWERCASE.length)];
              break;
            case 1 :
              thisLetter = _UPPERCASE[Math.floor(Math.random()*_UPPERCASE.length)];
              break;
            case 2 :
              thisLetter = _NUMBER[Math.floor(Math.random()*_NUMBER.length)];
              break;
            case 3 :
              thisLetter = _SPECIAL[Math.floor(Math.random()*_SPECIAL.length)];
              break;
          }
          // Adds generated letter to final password string
          returnable += thisLetter;
          
          // Logs password string as it builds it for debug purposes
          //console.log(returnable);
        }
      }

      //Returns finalized password
      return returnable;

    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
