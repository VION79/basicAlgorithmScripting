/*
Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

factorialize(5) should return a number.
Waiting:factorialize(5) should return 120.
Waiting:factorialize(10) should return 3628800.
Waiting:factorialize(20) should return 2432902008176640000.
Waiting:factorialize(0) should return 1.

function factorialize(num) {

  return num;
}

factorialize(5);

*/

function factorialize(num) {
    let factorializedNum = 1;
    for ( let i=2; i <= num; i++) {
      factorializedNum *= i;
    }
    return factorializedNum;
  }
  
  console.log(factorialize(5));
  console.log(factorialize(10));
  console.log(factorialize(20));
  console.log(factorialize(0));

/*

120
3628800
2432902008176640000
1

*/