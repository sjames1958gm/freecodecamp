function sumPrimes(num) {
  var sum = 0;
  var i = 2;
  
  var isPrime = function(x) {
    var sq = Math.floor(Math.sqrt(x));
    var i = 2;
    for (; i <= sq; i++) {
      if ((x % i) === 0) return false;  
    }
    return true;
  };

  for (; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}
