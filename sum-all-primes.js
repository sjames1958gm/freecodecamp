// Inefficient as isNotDivisible should only go until sqrt of i
// But example using currying.
function sumPrimes(num) {
  
  var sum = 2;
  var arr = [2];

  function isNotDivisible(i) {
    return function(n) {
      return (i % n) !== 0;
    };
  }

  for (var i = 3; i <=num; i++) {
    if (arr.every(isNotDivisible(i))) {
      arr.push(i);
      sum += i;
    }
  }
  
  return sum;
}
