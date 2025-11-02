const repeatStringNumTimes = (str, numTimes) => {
  if (numTimes <= 0) return "";

  let result = "";
  for (let i = 0; i < numTimes; i++) {
      result += str;
  }
  return result;
}

console.log(repeatStringNumTimes("hello", 1))