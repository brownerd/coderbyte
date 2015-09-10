function LongestWord(sen) {
  var arr = sen.split(" ");
  arr.reduce(function (prev,next){
   if (next.length > prev.length) return next;
    return prev;
  };
}

console.log( LongestWord( "What the hell is going on" ) );



// var longestname = sk8.reduce(function (prev,next){
//  if (next.length > prev.length) return next;
//   return prev;
// });
//
// console.log( longestname );
