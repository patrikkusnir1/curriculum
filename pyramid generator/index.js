const pyramid = (pattern, rows, directionBool) => {
  let result = "\n";
  

  if (!directionBool) {
    // vertex up - normal pyramid
    for (let i = 0; i < rows; i++) {
      // add leading spaces
      for (let j = 0; j < rows - i - 1; j++) {
        result += " ";
      }
      // add pattern
      for (let k = 0; k < 2 * i + 1; k++) {
        result += pattern;
      }
      result += "\n"; // newline after each row
    }
  } else {
    // vertex down - inverted pyramid
      for (let i = rows - 1; i >= 0; i--) {
        // add leading spaces
        for (let j = 0; j < rows - i - 1; j++) {
          result += " ";
        }
        // add pattern
        for (let k = 0; k < 2 * i + 1; k++) {
          result += pattern;
        }
        result += "\n"
      }
    }
  return result;
}

console.log(pyramid("o", 4, true))
