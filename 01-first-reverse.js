// Shortest
// Uses esisting methods
function FirstReverse(str) {
  return str.split("").reverse().join("");
}

console.log( FirstReverse( "hello you" ) );


// for loop
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
function ThirdReverse(str) {
  var i = 0;
  var s = [];
  var l = str.length;

  while (i < l) {
    // Start and the beginning of the string and move each characte to the fron of the array
    s.unshift(str[i]);
    i++;
  }
  //Join each item in the array
  return s.join('');
}

console.log( ThirdReverse( "let's go!" ) );



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
