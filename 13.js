/*
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
Waiting:bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
Waiting:bouncer([false, null, 0, NaN, undefined, ""]) should return [].
Waiting:bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
Waiting:You should not mutate arr.

function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);


*/

function bouncer(arr) {
    const noFalsy = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) noFalsy.push(arr[i]);
    }
    return noFalsy;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

/*
Code Explanation
We create a new empty array (noFalsy).
We use a for cycle to iterate over all elements of the provided array (arr).
We use the if statement to check if the current element is truthy 90 or falsy 233.
If the element is truthy, we push it to the new array (newArray). This result in the new array (noFalsy) containing only 
truthy elements.
We return the new array (noFalsy).
*/

/*
console result
[ 7, 'ate', 9 ]

*/