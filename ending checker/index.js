const confirmEnding = (str,ending ) =>  {
  const len = ending.length;
  return str.slice(-len) === ending;
}
