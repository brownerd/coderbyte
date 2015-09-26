// Simple Symbols
// ----------------------------------------------------------------------------
// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false.
// The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.
// So the string to the left would be false.
// The string will not be empty and will have at least one letter.


// function SimpleSymbols(str) {
//
//   if (str.length >= 1)
//
//
//   return str;
//
// }

// Best Practices
function SimpleSymbols(str) {

  // Loop over all the charasters in the string
  for( var i = 0, len = str.length; i < len; i++ ){

    // test only letters in the string, if there are letters, continue
    if ( /[a-zA-Z]/.test(str[i]) ) {

      // the character before OR after the letter is NOT +, return false
      if ( str[i - 1] != '+' || str[i + 1] != '+' ) {
        return false
      }
    }
  }

  // If it passes all the tests above, then return true
  return true
}

console.log( SimpleSymbols("+d+=3=+s+7++x+") );
console.log( SimpleSymbols("f++d+") );



// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "+d+=3=+s+"  Output = "true"
// Input = "f++d+"      Output = "false"





// Resources
// ----------------------------------------------------------------------------

// I've been totally stuck with this one. Using other's solutions.


/*
  // Split string into an array
  var strs = str.split("");

  // create a string of the alphabet
  var letters = "abcdefghijklmnopqrstuvwxyz"

  for (var i = 0; i < strs.length; i++) {

    // This is a little confusing for me but...
    // get the indexOf only the letter in the string array and see if there is a + before or after it
    if (letters.indexOf(strs[i]) != -1 && (strs[i-1] != "+" || strs[i+1] != "+")) {
      return false;
    }
  }
  return true;

}
*/



/*
https://github.com/ZLester/Coderbyte-Solutions/blob/master/Easy%20-%2007%20-%20Simple%20Symbols.js

function SimpleSymbols(str) {

    for (var i = 0, x = str.length; i < x; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
                return false;
            }
        }
    }

    return true;
}
*/

// Scratch pad
// ----------------------------------------------------------------------------
