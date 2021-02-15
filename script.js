// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var length = prompt("PASSWORD LENGTH?\n(8 - 128)");
  var thisLetterSet = 0;
  var thisLetter = "";
  var returnable = "";

  var _LOWERCASE = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase());
  var _UPPERCASE = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var _NUMBER = Array.from("0123456789");
  var _SPECIAL = Array.from("!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~");


  if(length<8 || length>128 || isNaN(length)){
    alert("INVALID CHOICE. CHOOSE A NUMBER BETWEEN 8 AND 128.");
  }else{

    var enableLowercase = confirm("ALLOW LOWERCASE?")
    var enableUppercase = confirm("ALLOW UPPERCASE?")
    var enableNumeric = confirm("ALLOW NUMBERS?")
    var enableSpecial = confirm("ALLOW SPECIAL CHARACTERS?")

    if(enableLowercase){console.log("lowercase enabled");}
    if(enableUppercase){console.log("uppercase enabled");}
    if(enableNumeric){console.log("numbers enabled");}
    if(enableSpecial){console.log("special charaters enabled");}

    if(!enableLowercase&&!enableUppercase&&!enableNumeric&&!enableSpecial){
      alert("INVALID CHOICE. CHOOSE AT LEAST ONE CHARACTER TYPE.");
    }else{

      for(var i = 0; returnable.length<length; i++){

        //console.log("Starting iteration " + i);

        thisLetterSet = Math.floor(Math.random() * 4);

        if(
        (thisLetterSet === 0 && enableLowercase)||
        (thisLetterSet === 1 && enableUppercase)||
        (thisLetterSet === 2 && enableNumeric)||
        (thisLetterSet === 3 && enableSpecial)
        ){
          //console.log(thisLetterSet);

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

          returnable += thisLetter;
          console.log(returnable);
        
        }else{

        }
      }

      return returnable;

    }
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
