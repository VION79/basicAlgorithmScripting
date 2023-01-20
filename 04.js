/*

Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Waiting:findLongestWordLength("May the force be with you") should return 5.
Waiting:findLongestWordLength("Google do a barrel roll") should return 6.
Waiting:findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Waiting:findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.

function findLongestWordLength(str) {
  return str.length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


*/


function findLongestWordLength(str) {
    let words = str.split(' '); // split the string into individual words
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }

  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

/*

6

Code Explanation
Take the string and convert it into an array of words. Declare a variable to keep track of the maximum length and loop from 0 to the length of the array of words.

Then check for the longest word by comparing the current word to the previous one and storing the new longest word. At the end of the loop just return the number value of the variable maxLength.

*/