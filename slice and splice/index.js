const frankenSplice = (array1, array2, index) => {
  let copiedArray = [...array2];
  copiedArray.splice(index, 0, ...array1);
  return copiedArray;
}

console.log(frankenSplice([1, 2, 3, 4], [], 0));