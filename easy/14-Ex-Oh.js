// Ex Oh
// ----------------------------------------------------------------------------
// Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

function ExOh(str) {

  var x = str.split('').filter(function(str) {
    return /x/.test(str)
  })

  var o = str.split('').filter(function(str) {
    return /o/.test(str)
  })
  return x.length === o.length
}

console.log( ExOh("xooxxo") )
console.log( ExOh("x") )




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "xooxxo"   Output = "true"
// Input = "x"        Output = "false"





// Resources
// ----------------------------------------------------------------------------

// The Array filter method
// https://egghead.io/lessons/javascript-the-array-filter-method



// Notes
// ----------------------------------------------------------------------------
/*

I knew that I could use .filter() here from the Egghead async tut, but I didn't exactly know how to get it to work. After a ton of hacking, it got it to work.


 */
