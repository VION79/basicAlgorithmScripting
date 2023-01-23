/*
Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

booWho(true) should return true.
Waiting:booWho(false) should return true.
Waiting:booWho([1, 2, 3]) should return false.
Waiting:booWho([].slice) should return false.
Waiting:booWho({ "a": 1 }) should return false.
Waiting:booWho(1) should return false.
Waiting:booWho(NaN) should return false.
Waiting:booWho("a") should return false.
Waiting:booWho("true") should return false.
Waiting:booWho("false") should return false.

function booWho(bool) {
  return bool;
}

booWho(null);

*/

function booWho(bool) {
    return typeof bool === "boolean";
  }
  console.log (booWho(null));
  console.log (booWho(true));
  console.log (booWho(false));
  console.log (booWho("false"));




/*

false
true
true
false

Code Explanation
Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.


*/