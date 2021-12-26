const isPrime = (num) => {
  if (num % 2 === 0 || num < 3 || !Number.isSafeInteger(num)) {
    return num === 2;
  }
  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

const printPrimeNumbers = (a, b) => {
  // eslint-disable-next-line no-plusplus
  for (let i = a; i < b; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

printPrimeNumbers(5, 10);
