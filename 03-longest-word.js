// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.




// Using the reduce method
var sentence = "What 908098098hello!!908()* the Mississippi hell is going on"


function LongestWord(sen) {
  var arr = sen.split(" ")
  var long = arr.reduce(function (prev,next) {
    if (next.length > prev.length) return next
    return prev
  })
  return long
}

console.log( LongestWord( sentence) )



function LongestWord2(sen) {
  var arr = sen.split(/[\s\d.,!?"_\/`]+/)
  var long = arr.reduce(function (prev,next) {
    if (next.length > prev.length) return next
    return prev
  })
  return long
}

console.log( LongestWord2( sentence ) )



//String.prototype.split(separator, limit)
var myString = 'Hello 1 word. Sentence number 2.';
var splits = myString.split(/\s/, 2);

console.log(splits);





//String.prototype.replace()
// str.replace(regexp|substr, newSubStr|function[, flags])

var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);



var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
var newstr = str.replace(re, '$2, $1');
console.log(newstr);


//Resources

// Manipulating JavaScript Arrays
// https://www.youtube.com/watch?v=KhQkErkEips

// Finding longest word in a string
// http://codereview.stackexchange.com/questions/65049/finding-longest-word-in-a-string
