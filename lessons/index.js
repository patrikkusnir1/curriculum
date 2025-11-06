function logArgs(...args) {
	for (const arg of args) {
		console.log(arg)
	}
}

logArgs(1, 2, 3)

// function badFunction(...args = [1, 2] ) {

// }

function hasCat(...args) {
	return args.includes("cat");
}

console.log(hasCat("dog", "chicken", "cat"))
console.log(hasCat("dog", "chicken", "horse"))