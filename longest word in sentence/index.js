const findLongestWordLength = str => {
  let maxLength = 0;
  let arr = str.split(" ");
  for (const word of arr) {
    if (word.length > maxLength) {
      maxLength = word.length
    }
  }
  return maxLength;
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));