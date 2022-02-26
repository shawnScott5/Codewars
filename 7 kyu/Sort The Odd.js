/* Instructions: 
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even 
numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
*/

// Solution:
function sortArray(array) {
    let odds = [];

    for (let i = 0; i < array.length; ++i) {
      if (array[i] % 2 !== 0) {
        odds.push(array[i]);
      }
    }
    odds.sort((a, b) => a - b)

    for (let j = 0; j < array.length; ++j) {
      if (array[j] % 2 !== 0) {
        array[j] = odds.shift();
      }
    }
    
   return array;
  }