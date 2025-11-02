// function booWho(testValue) {
//   return typeof(testValue) === "boolean" ? true : false
// }

const booWho = testValue => typeof(testValue) === "boolean";
console.log(booWho(true))