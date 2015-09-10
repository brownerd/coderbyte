// Using the reduce method

function LongestWord(sen) {
  var arr = sen.split(" ")
  var long = arr.reduce(function (prev,next) {
    if (next.length > prev.length) return next
    return prev
  })
  return long
}

console.log( LongestWord( "What the hell is going on" ) )
