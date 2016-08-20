function sumFibs(num) {
  var arr = [1, 1];
  var sum = 2;
  
  while (true) {
    var newval = arr[0] + arr[1];
    if (num < newval) return sum;
    if (newval % 2) sum += newval;
    arr[0] = arr[1];
    arr[1] = newval;
  }

}

sumFibs(4);

