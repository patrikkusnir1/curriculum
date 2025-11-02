const titleCase = str => {
  let upper = true;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      upper = true;
      newStr += str[i];
      continue;
    }
    newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase();
    upper = false;
  }
  return newStr;
}

console.log(titleCase("I like to code"));