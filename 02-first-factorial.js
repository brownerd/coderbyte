function FirstFactorial(num) {
 var t = 1;
 for(var i = 1; i <= num; i++) {
   t *= i;
 }
 return t;
}

console.log( FirstFactorial(8) );


// Notes
// I know there is a way to do this recursively, but I don't know how that works yet
