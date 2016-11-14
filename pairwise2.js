function pairwise(arr, arg) {
  var used = [];
  
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== null) {
      var pair = arr.indexOf(arg - arr[i], i + 1);
      if (pair !== -1 && used.indexOf(pair) === -1) {
        used.push(i);
        arr[i] = null;
        used.push(pair);
        arr[pair] = null;
      }
    }
  }
  
  return used.reduce(function(a, b) {
    return a + b;
  }, 0);
}
