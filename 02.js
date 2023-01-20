/*
Reverse a String
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".

reverseString("hello") should return a string.
Waiting:reverseString("hello") should return the string olleh.
Waiting:reverseString("Howdy") should return the string ydwoH.
Waiting:reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

function reverseString(str) {
  return str;
}

reverseString("hello");

*/

function reverseString(str) {
    let reversed = "";
    for (let i=str.length -1; i>=0; i--) {
      reversed += str[i];
    };
    return reversed;
   }
   
   console.log (reverseString("hello"));


/*

olleh

*/