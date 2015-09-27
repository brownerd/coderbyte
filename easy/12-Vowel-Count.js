// Vowel Count
// ----------------------------------------------------------------------------
// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5).
// Do not count y as a vowel for this challenge.


function VowelCount(str) {
  var count = 0
  for( var i = 0, len = str.length; i < len; i++ ) {

    if (/[aeiou]/.test(str[i]) ) {
      count ++
    }
  }
    return count
}

console.log( VowelCount("hello" ) )
console.log( VowelCount("coderbyte") )
console.log( VowelCount("aeiou") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello"        Output = 2
// Input = "coderbyte"    Output = 3





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
