const fearNotLetter = string => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let startingPoint = letters.indexOf(string[0]);
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== letters[startingPoint + i]) {
      return letters[startingPoint + i];
    }
  }
  return undefined;
}

console.log(fearNotLetter("acd"))
