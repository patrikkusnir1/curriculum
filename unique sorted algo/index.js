/* 


    You should have a function named uniteUnique.
    The uniteUnique function should accept two or more arrays as arguments.
    The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].

*/

// const uniteUnique = (array1, array2, ...arrays) => {
//   let finalArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i] || finalArray.includes(array1[i]) === false ) {
//       finalArray.push(array1[i]);
//     }
//   }
//   for (let j = 0; j < array2.length; j++) {
//     if (finalArray.includes(array2[j]) === false) {
//       finalArray.push(array2[j]);
//     }
//   }
//   return finalArray;
// }



const uniteUnique = (...arrays) => {
  let finalArray = [];
  for (const array of arrays) {
    for (let i = 0; i < array.length; i++) {
      if ( finalArray.includes(array[i]) === false ) {
          finalArray.push(array[i]);
      }
    }
  }
  return finalArray
}

uniteUnique([1, 2, 3], [5, 2, 1]);