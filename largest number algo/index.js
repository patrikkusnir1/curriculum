const largestOfAll = arr => {
  let largestArrayNum = [];

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i][0]; // reset the number
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > max) {
        max = arr[i][j]
      }
    largestArrayNum[i] = max;
  }
}
  console.log(largestArrayNum)
  return largestArrayNum;
  // let max = Math.max(largestArrayNum);
  // if (largestArrayNum.includes(max)) {
  // return max;
  // }
}

largestOfAll([
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
