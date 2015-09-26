// Time Convert
// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3).
// Separate the number of hours and minutes with a colon.

function TimeConvert(num) {

  var time = (num / 60)
  var tarr = time.toString().split('.')
  return (tarr[0] * 1) + ':' + ( Number( '.' + tarr[1]) * 60);

  // Yes, this solution works, but it doesn't read well. I like the other solution below. I need to grok modulo better. 

}

console.log( TimeConvert(126) )
console.log( TimeConvert(45) )
console.log( TimeConvert(30) )
console.log( TimeConvert(63) )




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 126  Output = "2:6"
// Input = 45   Output = "0:45"





// Resources
// ----------------------------------------------------------------------------
// String to number -  http://www.w3schools.com/jsref/jsref_number.asp

// String to number - http://www.javascripter.net/faq/convert2.htm



// Other solutions
// ----------------------------------------------------------------------------

// https://github.com/leaena/coderbyte/blob/master/09timeconvert.js
/*
function TimeConvert(num) {
  var minutes = num % 60;
  var hours = parseInt(num/60);
  return "" + hours + ":" + minutes;

}
*/
