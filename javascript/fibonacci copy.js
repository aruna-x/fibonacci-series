// #1: iterative

// function fibonacci(num) {}
//   let i = 0, j = 1;
//   let holder;
//   while (num>0) {
//     holder = i+j;
//     i = j;
//     j = holder;
//     num--;
//   }
//   return i;
// }

// #2: recursive

function fibonacci(num, i=0, j=1) {
  return num === 0 ? i : fibonacci(num-1,j,i+j);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 8");
  console.log("=>", fibonacci(6));
}

module.exports = fibonacci;

/**
 * Find the nth element in the Fibonacci series
 * 
 * Plan:
 * 
 * iterative: keep track of i=0, j=1 (the last two nums in the series)
 * decrease num until 0. then return i.
 * 
 * recursive: pass i=0, j=1, and num into func fib.
 * decrease num each round.
 * when num = 0, return i
 * 
 * num 2 1 0
 * i   0 1 1
 * j   1 1 2
 * i+j 1 2 3
 * return: i
 * 
 */
