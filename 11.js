/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

titleCase("I'm a little tea pot") should return a string.
Waiting:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
Waiting:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
Waiting:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");

Problem Explanation
We have to return a sentence with title case. This means that the first letter will always be in uppercase and the rest will be in lowercase.

Hint 1
You chould start by splitting the string into an array of words.
Hint 2
You should make the word lowercase and make the first letter uppercase.
Hint 3
You will need to create a new string with pieces of the updated words.

function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

*/

function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));


/*

I'm A Little Tea Pot

Code Explanation
Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.


*/