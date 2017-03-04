function uniteUnique(arr1, arr2, arr3) {
  
  var args = Array.from(arguments);
  
  var f = function(val) {
    return this.indexOf(val) === -1;
  };

  return args.reduce(function(prev, curr) {
    return prev.concat(curr.filter(f, prev));
  }, []);
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
