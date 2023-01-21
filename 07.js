/*
Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

repeatStringNumTimes("*", 3) should return the string ***.
Waiting:repeatStringNumTimes("abc", 3) should return the string abcabcabc.
Waiting:repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
Waiting:repeatStringNumTimes("abc", 1) should return the string abc.
Waiting:repeatStringNumTimes("*", 8) should return the string ********.
Waiting:repeatStringNumTimes("abc", -2) should return an empty string ("").
Waiting:The built-in repeat() method should not be used.
Waiting:repeatStringNumTimes("abc", 0) should return "".

function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);


*/

function repeatStringNumTimes(str, num) {
    if (num >= 1) {
    return str + repeatStringNumTimes(str, num-1);
    } 
   else {
    return "";
  }
  }
  
  console.log(repeatStringNumTimes("abc ", 3));


/*

abc abc abc

Code Explanation
This solution uses recursion.
We check if num is negative and return an empty string if true.
If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another… until eventually num is 1. And return that whole process.


*/