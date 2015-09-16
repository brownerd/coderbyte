// First Reverse
// ----------------------------------------------------------------------------
// have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(str) {

  return str.split("").reverse().join("");

}

console.log( FirstReverse( "coderbyte" ) )
console.log( FirstReverse( "I Love Code"  ) )



// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "coderbyte"    Output = "etybredoc"
// Input = "I Love Code"  Output = "edoC evoL I"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------

// for loop
// ----------------------------------------------------------------------------
function SecondReverse(str){
  var s = ''
  for (var i = str.length; i >= 0; i--) {
    // Assign each character in the string to s, starting with the last character in the string
    s += str.charAt(i);
  }
  return s;
}

console.log( SecondReverse( "what up" ) );


// While loop
// Just having fun with this
// ----------------------------------------------------------------------------
function ThirdReverse(str) {
  var i = 0;
  var s = [];
  var l = str.length;

  while (i < l) {
    // Start and the beginning of the string and move each character to the front of the array
    s.unshift(str[i]);
    i++;
  }
  //Join each item in the array
  return s.join('');
}

console.log( ThirdReverse( "let's go!" ) );


//While with charAt
// ----------------------------------------------------------------------------
function FourthReverse(str) {
  var i = str.length;
  var s = '';

  while (i > 0) {
    s += str.charAt(i);
    i--;
  }
  return s;
}

console.log( ThirdReverse( "Hell yeah" ) );



var string = "ABC";
console.log( string[1] );
console.log( string.charAt(1) );



// Reverse using Map
// figured out from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// ------------------------------------------------------
function reverseString(str) {
  var revd = [].map.call(str, function(x) {
    return x;
  }).reverse().join('');
  return revd;
}

console.log( reverseString("hello") );











// Other's Soluitons
// ---------------------------------------------------------------------------


// function FirstReverse(str) {
//
//   // code goes here
//   if ( typeof str == "string") // if str is a string
//     var str = str.split("").reverse().join("");
//
//   if ( typeof str == "number" && str >= 0 )  // if str is a positive number
//     var str = str.toString().split('').reverse().join('');
//
//   if ( typeof str == "number" && str <= 0 )  // if str is a negative number
//     var str = Math.abs(str)
//
//   if ( Array.isArray(str) )  // if str is an array
//     var str = str.reverse();
//
//
//   return str;
//
// }
//
//
//
//
// # Leanna's Solution [source](http://leaena.com/t/coderbyte/)
//
//  function FirstReverse(str) {
//    return str.split("")  //splits the string into an array of characters
//              .reverse()  //reverses the array
//              .join("");  //joins the array back into a string, with no space between the characters
//  }
//
//
//
// # SuperDewd's solution
//
//
// function FirstReverse(str) {
//
//   var r = '';
//   for (var i = str.length - 1; i >= 0; i--) {
//     r += str[i];
//   }
//
//   // code goes here
//   return r;
//
// }
//
// // this call is needed to test your function
// // keep this when you submit your code
// FirstReverse(str)
//
//
//
//
// # mattlarsh's solution
//
//
// function FirstReverse(str) {
//
//   // code goes here
//    return str.split("").reverse().join("");
//
// }
//
//
//
//
// # AlexBlack's solution
//
//
// function FirstReverse(str) {
//   var reverseStr = ""
//       for(var i = 0 ; i <= str.length; i++){
//         reverseStr += str.charAt(str.length - i)
//       }
//   // code goes here
//   return reverseStr;
//
// }
//
// // keep this function call here
// // to see how to enter arguments in JavaScript scroll down
// FirstReverse(readline());
//
//
//
//
// # blueyellowpink's
//
//
// function FirstReverse(str) {
//
//   var swag = "";
//   for (i=0;i<str.length;i++){
//     swag += str[str.length-i-1];}
//
//   // code goes here
//   return swag;
//
// }
//
// FirstReverse(readline());
