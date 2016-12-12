function destroyer(arr) {
  // Remove all the values
  var args = Array.prototype.slice.call(arguments, 1);
  
  var f = function(a) { return args.indexOf(a) == -1; };

  return arr.filter(f);

}
