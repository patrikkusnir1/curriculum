const mutation = array => {
  // take array items and make them lowercase
  const firstWord = array[0].toLowerCase();
  const secondWord = array[1].toLowerCase();

  for (let char of secondWord) {
    // if not return false and end program
    if (!firstWord.includes(char)) {
      return false;
    }
  }
  // if character includes in array - return true
  return true;

}

console.log(mutation(["Hello", "Hel"]));
