function getSum(num1, num2) {
	return num1 + num2;
}

console.log(getSum(3, 4, 5))

function getArg() {
	return arguments.length;
}

console.log(getArg("example"));
console.log(getArg("Another","example"));

function hasCat() {
	return [...arguments].includes("cat");
}

console.log(hasCat("dog", "chicken", "cat"));
console.log(hasCat("dog", "chicken", "horse"));