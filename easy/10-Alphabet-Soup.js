// Alphabet Soup
// ----------------------------------------------------------------------------
// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.


function AlphabetSoup(str) {

  var arr = str.split('')
  return arr.sort().join('');

}

console.log( AlphabetSoup("coderbyte") )
console.log( AlphabetSoup("hooplah") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "coderbyte"    Output = "bcdeeorty"
// Input = "hooplah"       Output = "ahhloop"





// Resources
// ----------------------------------------------------------------------------

// Array.prototype.sort() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


// Scratch pad
// ----------------------------------------------------------------------------
