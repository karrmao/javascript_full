// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// function getPrimes(num) {
//   for (let number = 2; number <= num; number++) {
//     let isPrime = true;

//     console.log('CHECKING NUMBER: ' + number);

//     for (let index = 2; index < number; index++) {
//       console.log('INDEX: ' + index);

//       if (number % index === 0) {
//         console.log('NUMBER IS NOT PRIME: ' + number);

//         isPrime = false;
//       }

//       if (isPrime) {
//         console.log(number);
//       }
//     }
//   }
// }

// // getPrimes(15);
// getPrimes(7);

function getPrimes(num) {
  for (let i = 2; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

getPrimes(7);
