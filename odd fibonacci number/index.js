const sumFibs = num => {
  let prev_fib = 0;
  let cur_fib = 1;
  let sum = 0;
  while (cur_fib <= num) {
    if (cur_fib % 2 != 0) {
      sum += cur_fib;
    }

    // move to the next fibonacci number
    let next_fib = prev_fib + cur_fib;
    prev_fib = cur_fib;
    cur_fib = next_fib;
  }
  return sum
}

sumFibs(4)