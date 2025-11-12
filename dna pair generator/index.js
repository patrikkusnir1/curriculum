
const pairElement = str => {
  let charArray = str.split("")
  
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === "A") {
      let indexToReplace = charArray.indexOf("A");
      charArray.splice(indexToReplace, 1, ["A", "T"]);
    } else if (charArray[i] === "T") {
      let indexToReplace = charArray.indexOf("T");
      charArray.splice(indexToReplace, 1, ["T", "A"]);
    } else if (charArray[i] === "C") {
      let indexToReplace = charArray.indexOf("C");
      charArray.splice(indexToReplace, 1, ["C", "G"]);
    } else {
        let indexToReplace = charArray.indexOf("G");
        charArray.splice(indexToReplace, 1, ["G", "C"]);
    }
  }
  return charArray;
}

console.log(pairElement("ATCGA"))


