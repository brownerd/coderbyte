// Simple Adding
// ----------------------------------------------------------------------------
// Have the function SimpleAdding(num) add up all the numbers from 1 to num.
// For the test cases, the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {

  // Condition - it will be false until number is reduced down
  if (num <= 1) {
    return 1
  }
  return (num + SimpleAdding(num -1))
}

console.log( SimpleAdding( 0 ) );
console.log( SimpleAdding( 2 ) );




// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = 12   Output = 78
// Input = 140     Output = 9870



//2 + 2 - 1


// Resources
// ----------------------------------------------------------------------------

// Recursion in Functional JavaScript
// http://www.sitepoint.com/recursion-functional-javascript/


// Scratch pad
// ----------------------------------------------------------------------------

// - Learning about recursion now. Kind of start to pick tihs up faster thatn I thought.






//welcome to recursion!
//recursion is simply calling a function from within itself to rerun the function
//it's like a complex for loop a lot of the time, but is also super useful for binary searchs

// function FirstFactorial(num) {
//   if( num === 1 ) { //recursion needs a base case, otherwise it will go on forever
//     return 1;       //if num is ever 1 we break out of the recursion
//   }
//   return num * FirstFactorial(num-1); //recursion magic! for factorials (num!) the answer is num * num-1 ... * 1
// }                                     //so we need to call FirstFactorial on all the numbers below num and collect the results
