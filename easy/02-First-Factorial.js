// First factorial
// ----------------------------------------------------------------------------
// have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

function FirstFactorial(num) {

   var t = 1;
   for(var i = 1; i <= num; i++) {
     t *= i;
   }
   return t;

}

console.log( FirstFactorial( 4 ) )
console.log( FirstFactorial( 8 ) )




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 4    Output = 24
// Input = 8    Output = 40320





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
// I see that there is a recursive way to do this, but recursion doesn't make sense to me yet.








//welcome to recursion!
//recursion is simply calling a function from within itself to rerun the function
//it's like a complex for loop a lot of the time, but is also super useful for binary searchs

// function FirstFactorial(num) {
//   if( num === 1 ) { //recursion needs a base case, otherwise it will go on forever
//     return 1;       //if num is ever 1 we break out of the recursion
//   }
//   return num * FirstFactorial(num-1); //recursion magic! for factorials (num!) the answer is num * num-1 ... * 1
// }                                     //so we need to call FirstFactorial on all the numbers below num and collect the results       
