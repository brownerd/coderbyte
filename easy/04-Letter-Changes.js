// Letter Changes
// ----------------------------------------------------------------------------
// Hhave the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

function makeArr(str) {
  //Split string into arrar
  var arr = str.split('')

  //Loop over the length of the array
  for(var i = 0, l = arr.length; i < l; i++) {
    //match any lower or uppercase letter between a-y
    if (arr[i].match(/[a-yA-Y]/)) {
      //console.log( arr[i] )
      //Change each matched character into it's character code
      var target = arr[i].charCodeAt()
      //Add one to that charCode, thus assigning it's following letter
      var next = target + 1
      //Change it from it's charCdoe back to a letter
      arr[i] = String.fromCharCode(next)
      //console.log( arr[i] )
    }
  }

  // Loop over length of array again
  for(var i = 0, l = arr.length; i < l; i++) {
    //Match vowles
    if (arr[i].match(/[aeiou]/)) {
      //Capitalize all vowels
      arr[i] = arr[i].toUpperCase()
      //console.log( arr[i] )
    }
  }

  // Loop over length of array again
  for(var i = 0, l = arr.length; i < l; i++) {
    // Match lowercase z
    if (arr[i].match(/[z]/)) {
      // Re-assign lowercase z to a
      arr[i] = "a"
      //console.log( arr[i] )
    // Match uppercase Z
    } else if (arr[i].match(/[Z]/)) {
      // Re-assign uppercase Z ro A
      arr[i] = "A"
      //console.log( arr[i] )
    }
  }
  // Return Joined items in array into a string
  return arr.join('')
}


console.log( makeArr( "Argument goes 342 hereZ" ) );
console.log( LetterChanges( "hello*3"  ) );
console.log( LetterChanges( "fun times!" ) );





// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "hello*3"    Output = "Ifmmp*3"
// Input = "fun times!"    Output = "gvO Ujnft!"





// Resources
// ----------------------------------------------------------------------------
// http://www.w3schools.com/charsets/ref_html_ascii.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// https://regex101.com/
// http://stackoverflow.com/questions/5915789/replace-item-in-array-with-javascript





// Scratch pad
// ----------------------------------------------------------------------------


// Scratch PAD

//ay(x)
//zZ(x)

//console.log( x );


//console.log( x )

// var sen = "hello there!"
//
// var yo = sen.match(/[a-yA-Y]/)
//
// console.log( yo )

// var numbers = [1, 4, 9];
// var doubles = numbers.map(function(num) {
//   return num * 2;
// });





// function LetterChanges(str) {
//
//   //Match letters
//   var reg = /[a-yA-Y]/
//   //Match z
//   var zed = /z/
//   var letter = /3/
//
//   var arr = str.split('')
//   var char = arr.map(function(num) {
//     return num.charCodeAt()
//   })
//   //var arr = str.split('')
//
//   return arr
// }

//console.log( LetterChanges("Argument goes here") )

// convert string to array
//

// console.log( "b".charCodeAt())
//
// function nextChar(char) {
//
//   var target = char.charCodeAt()
//   var next = target + 1
//   console.log( target )
//   console.log( next )
//   return String.fromCharCode(next)
// }
//
// console.log( nextChar("a") )





// Executing an Array of JavaScript Functions Using the shift() method
//http://blog.kevinchisholm.com/javascript/executing-javascript-functions-using-shift/
// var a = function(){ console.log("this is function: a") }
// var b = function(){ console.log("this is function: b") }
// var c = function(){ console.log("this is function: c") }
//
// var foo = [a,b,c];
//
// while (foo.length){
//     foo.shift().call();
// }
