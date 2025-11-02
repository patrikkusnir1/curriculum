const reverseString = str => {
  let string = str.split("");
  let reversedString = string.reverse();
  return reversedString.join("")
}

console.log(reverseString("Hello"))