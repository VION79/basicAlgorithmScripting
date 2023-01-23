/*
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
Waiting:getIndexToIns([40, 60], 50) should return 1.
Waiting:getIndexToIns([40, 60], 50) should return a number.
Waiting:getIndexToIns([3, 10, 5], 3) should return 0.
Waiting:getIndexToIns([3, 10, 5], 3) should return a number.
Waiting:getIndexToIns([5, 3, 20, 3], 5) should return 2.
Waiting:getIndexToIns([5, 3, 20, 3], 5) should return a number.
Waiting:getIndexToIns([2, 20, 10], 19) should return 2.
Waiting:getIndexToIns([2, 20, 10], 19) should return a number.
Waiting:getIndexToIns([2, 5, 10], 15) should return 3.
Waiting:getIndexToIns([2, 5, 10], 15) should return a number.
Waiting:getIndexToIns([], 1) should return 0.
Waiting:getIndexToIns([], 1) should return a number.

function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);

Hint 1
The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.

Hint 2
Once the array is sorted, then just check for the first number that is bigger and return the index.

Hint 3
If there is no index for that number then you will have to deal with that case too.



*/
function getIndexToIns(arr, num) {
    //first I need to sort the array (arr)
    arr.sort((a, b) => a - b);
    //I need to create an iteration through the array
    for (let i=0; i < arr.length; i++ ) {
    if (num <= arr[i]) return i;
    }
    //Then check if the arr[i] element is smaller than the num
  return arr.length;
  }
  
  console.log(getIndexToIns([40, 60], 50));

/*
Code Explanation
First I sort the array using .sort(callbackFunction) to sort it by lowest to highest, from left to right.
Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index.
/*

/*
1
the num variable (50) is in index position of 1 of the array [arr].
*/