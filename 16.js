/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);



*/

function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % size !== size - 1) temp.push(arr[i]); //i % size means looks for the reminder when you divid i by size. The result is 0, .5, or 
      else {
        temp.push (arr[i]);
        result.push (temp);
        temp = [];
      }
    }
  if (temp.length !== 0) result.push(temp);
    return result;
  }
  
  console.log (chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));


/*
Code Explanation

Firstly, we create two empty arrays called temp and result, which we will eventually return.
Our for loop loops until i is equal to or more than the length of the array in our test.
Inside our loop, we push to temp using temp.push(arr[i]); if the remainder of a / size is not equal to size - 1.
Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
Next, if temp isn’t an empty array, we push it to result.
Finally, we return the value of result.
 */
/*
console results
[ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e' ] ]

*/