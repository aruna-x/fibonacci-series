function fibonacci(num) {
  let prev = 0;
  let next = 1;
  let holder;

  if (num<0) {
    console.log('Oops, cannot find fib of negative num. Try again!');
    return;
  }
  
  while (num>=0){
    if (num===0){
      return prev
    }
    else {
      holder = next;
      next += prev;
      prev = holder;
      num--;
    }
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting error msg.");
  console.log("=>", fibonacci(-1));
}

module.exports = fibonacci;

/**
 * 1. understand and paraphrase
 * 
 * Fib: 0 1 1 2 3 5 8 13 21 34 55 ...
 * Write function fibonacci such that f(n) = nth fib num (starting from 0).
 * f(0) = 0
 * f(2) = 1
 * f(10) = 55
 * 
 * 2. write tests
 * 
 * Neg nums = reject
 * All else looks fine.
 * 
 * 3. pseudocode
 * 
 * While loop. 
 * Base case: if n = 0, return res. 
 * Else: add last num and next num, and decrement n.
 * O(n)
 * 
 * 4. code
 * 5. refactor
 * 6. optimize
 */
