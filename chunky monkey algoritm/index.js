const chunkArrayInGroups = (arr, chunkSize) => {
  let chunk = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunk.push(arr.slice(i, i + chunkSize));
  }
  return chunk;
}

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
