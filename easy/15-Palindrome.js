// Palindrome
// ----------------------------------------------------------------------------
// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.
// For example: "racecar" is also "racecar" backwards.
// Punctuation and numbers will not be part of the string.


function Palindrome(str) {

  // Let's turn the string into an array filter out the spaces
  var x = str.split('').filter(function(str) {
    return /[a-z]/.test(str)
  })

  //console.log( x );
  return x.join('') === x.reverse().join('')

}

console.log( Palindrome("never odd or even" ) );
console.log( Palindrome("eye" ) );
console.log( Palindrome("hello" ) );


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "never odd or even"    Output = "true"
// Input = "eye"                  Output = "true"





// Resources
// ----------------------------------------------------------------------------

// I didn't use this, but I wanted to remember ti for later.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Example: Using map to reverse a string
//
// var str = '12345';
// [].map.call(str, function(x) {
//   return x;
// }).reverse().join('');

// Output: '54321'
// Bonus: use '===' to test if original string was a palindrome



// Scratch pad
// ----------------------------------------------------------------------------
