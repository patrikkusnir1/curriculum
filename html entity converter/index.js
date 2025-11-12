const convertHTML = str => {
  let charArray = str.split("");
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === "&") {
      charArray[i] = "&amp;";
    } else if (charArray[i] === "<") {
      charArray[i] = "&lt;";
    } else if (charArray[i] === ">") {
      charArray[i] = "&gt;";
    } else if (charArray[i] === '"') {
      charArray[i] = "&quot;";
    } else if (charArray[i] === "'") {
      charArray[i] = "&apos;";
  }
}
  let joinedArray = charArray.join("")
  return joinedArray;
}

convertHTML("Hamburgers < Pizza < Tacos");