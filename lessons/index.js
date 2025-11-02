function outerFunction(x) {
	let y = 10;
	function innerFunction() {
		console.log(x + y)
	}
	return innerFunction;
}

let closure = outerFunction(5);
closure();

function createCounter() {
	let count = 0;
	return function() {
		count++;
		return count;
	}
}

let counter = createCounter();
console.log(counter());
console.log(counter());

function multiply(x) {
	return function(y) {
		return x * y
	}
}

let double = multiply(2);
console.log(double(5))

function createIncrementer() {
	let count = 0;
	return function() {
		count++;
		console.log(count)
	}
}

let increment = createIncrementer();
increment()
increment()