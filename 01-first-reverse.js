//Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.




// Shortest
// Uses existing methods
// ------------------------------------------------------
function FirstReverse(str) {
  return str.split("").reverse().join("");
}

console.log( FirstReverse( "hello you" ) );


// for loop
// ------------------------------------------------------
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
// Just having fin with this
// ------------------------------------------------------
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
// ------------------------------------------------------
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
