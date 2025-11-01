/* 

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.


*/



function findElement (arr, func) {
  // run function with array
 {
    for (let i = 0; i < arr.length; i++) {
      let result = func(arr[i]);
      if (result) {
        console.log(arr[i]);
        break;
      }
  }
    }
  return undefined;
  };

  // find first element with true
  // if true - return first element
  // not found - return undefined


findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })