function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  var locarr = arr.slice();
  locarr.push(num);
  
  locarr.sort(function(a, b) { return a - b;});
  
  return locarr.indexOf(num);
}
