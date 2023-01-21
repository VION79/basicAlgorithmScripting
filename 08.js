/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
Waiting:truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
Waiting:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
Waiting:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
Waiting:truncateString("A-", 1) should return the string A....
Waiting:truncateString("Absolutely Longer", 2) should return the string Ab....

function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


*/

function truncateString(str, num) {
    let lengthStr = str.length
     if (lengthStr > num) {
      return str.slice(0, num) + "...";
      }
      else {
        return str;
      }
    
    }
    
    console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


/*

A-tisket...

Code Explanation
We start off with a simple if statement to determine one of two outcomes…
If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.



*/