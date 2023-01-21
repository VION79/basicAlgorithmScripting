/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

confirmEnding("Bastian", "n") should return true.
Passed:confirmEnding("Congratulation", "on") should return true.
Passed:confirmEnding("Connor", "n") should return false.
Passed:confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Passed:confirmEnding("He has to give me a new name", "name") should return true.
Passed:confirmEnding("Open sesame", "same") should return true.
Passed:confirmEnding("Open sesame", "sage") should return false.
Passed:confirmEnding("Open sesame", "game") should return false.
Passed:confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Passed:confirmEnding("Abstraction", "action") should return true.
Passed:Your code should not use the built-in method .endsWith() to solve the challenge.



*/


function confirmEnding(str, target) {
    return str.slice (str.length - target.length) === target;
  }
  
  console.log(confirmEnding("Bastian", "n"));



/*

True

Code Explanation
First we use the slice method copy the string.
In order to get the last characters in str equivalent to the target's length we use the slice method.
The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
For example str.slice(10, 17) would return give me.
In this case we only include one parameter which it will copy everything from the starting index.
We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
Finally we compare the return result of slice to target and check if they have the same characters.

variable.slice(index) displays the string starting from that idex till the end of the string. 

const confirmEnding = "Bastian";
const ending = confirmEnding.slice(0);
console.log(ending);

The code above will log Bastian

const confirmEnding = "Bastian";
const ending = confirmEnding.slice(4);
console.log(ending);

The code above will log ian

*/