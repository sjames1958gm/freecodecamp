function GCD(a, b) {
  var q = b, r = a;
  while(r !== 0) {
    var newq = Math.floor(q / r);
    var newr = q % r;
    q = r;
    r = newr;
  }
  
  return q;
}

function smallestCommons(arr) {
  var result = 0;

  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  
  result = max;
  
  for (var i = min; i <= max; i++) {
    result = (i * result) / GCD(i, result);
  }
  
  return result;
}
