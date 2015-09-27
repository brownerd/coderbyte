// AB Check
// ----------------------------------------------------------------------------
// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
// Otherwise return the string false.


function ABCheck(str) {

  for( var i = 0, len = str.length; i < len; i++ ) {
    if ( /a/.test(str[i])) {
      //console.log( str[i + 4] )
      if (str[i + 4] === "b") {
        return true
      }
    }
  }
  return false
}

console.log( ABCheck("after badly") )
console.log( ABCheck("Laura sobs") )
console.log( ABCheck("ahjkbajiob") )


// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "after badly"    Output = "false"
// Input = "Laura sobs"     Output = "true"





// Resources
// ----------------------------------------------------------------------------




// Notes
// ----------------------------------------------------------------------------
// It took a while to figure out the double IF statement
