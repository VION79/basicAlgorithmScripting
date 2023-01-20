/*
Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

convertCtoF(0) should return a number
Passed:convertCtoF(-30) should return a value of -22
Passed:convertCtoF(-10) should return a value of 14
Passed:convertCtoF(0) should return a value of 32
Passed:convertCtoF(20) should return a value of 68
Passed:convertCtoF(30) should return a value of 86

function convertCtoF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertCtoF(30);


*/

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9/5) +32;
    return fahrenheit;
  }
  
  
  
  console.log (convertCtoF(0));


/*
32

other solution 1

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

other solution 2

function factorialize(num, factorial = 1) {
  if (num === 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);
*/