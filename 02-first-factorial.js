// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 



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
