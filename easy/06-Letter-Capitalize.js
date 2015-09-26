// Letter Capitalize
// ----------------------------------------------------------------------------
// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
// Words will be separated by only one space.

function LetterCapitalize(str) {
  var arr = str.split(" ")
  var n = arr.map(i => i.substring(1, -1).toUpperCase() + i.substring(1))
  return n.join(' ')
}

console.log( LetterCapitalize("hello world") )
console.log( LetterCapitalize("i ran there") )

//console.log( ["deck", "trucks", "wheels"].map( i => i.substring(2, -2) ) )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello world"    Output = "Hello World"
// Input = "i ran there"    Output = "I Ran There"





// Resources
// ----------------------------------------------------------------------------
// .map came from Egghead's tut: The Array map method
// - https://egghead.io/lessons/javascript-the-array-map-method
//
// - CodeAcademy Js course gave me the idea to use substring


// Scratch pad
// ----------------------------------------------------------------------------
// So this was a pain in the ass, maybe 3 days of tyring shit.
//
// Fortunately, I came across this async programming tut at egghead.
//
// I'm just trying to learn JS and I'm already starting to pick up on this functional programming stuff.
//
//
