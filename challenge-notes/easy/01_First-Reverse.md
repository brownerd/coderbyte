# Other's Soluiton

```javascript
function FirstReverse(str) {

  // code goes here
  if ( typeof str == "string") // if str is a string
    var str = str.split("").reverse().join("");

  if ( typeof str == "number" && str >= 0 )  // if str is a positive number
    var str = str.toString().split('').reverse().join('');

  if ( typeof str == "number" && str <= 0 )  // if str is a negative number
    var str = Math.abs(str)

  if ( Array.isArray(str) )  // if str is an array
    var str = str.reverse();


  return str;

}
```



# Leanna's Solution [source](http://leaena.com/t/coderbyte/)
```javascript
 function FirstReverse(str) {
   return str.split("")  //splits the string into an array of characters
             .reverse()  //reverses the array
             .join("");  //joins the array back into a string, with no space between the characters
 }
```


# SuperDewd's solution

```javascript
function FirstReverse(str) {

  var r = '';
  for (var i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }

  // code goes here
  return r;

}

// this call is needed to test your function
// keep this when you submit your code
FirstReverse(str)  
```



# mattlarsh's solution

```javascript
function FirstReverse(str) {

  // code goes here
   return str.split("").reverse().join("");

}
```



# AlexBlack's solution

```javascript
function FirstReverse(str) {
  var reverseStr = ""
      for(var i = 0 ; i <= str.length; i++){
        reverseStr += str.charAt(str.length - i)
      }
  // code goes here  
  return reverseStr;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());  
```



# blueyellowpink's

```js
function FirstReverse(str) {

  var swag = "";
  for (i=0;i<str.length;i++){
    swag += str[str.length-i-1];}

  // code goes here  
  return swag;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());
