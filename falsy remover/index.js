const bouncer = array => {
  const copiedArray = [...array];
  let result = [];


  for (let i = 0; i < copiedArray.length; i++) {
    if (Boolean(copiedArray[i])) {
      result.push(copiedArray[i])
    }
  }
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));