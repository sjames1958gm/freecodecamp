function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  var stack = arr.slice(0);
  
  while (stack.length > 0) {
    if (Array.isArray(stack[0])) {
      var f = stack.shift();
      for (var i = f.length - 1; i >= 0; i--) {
        stack.unshift(f[i]);
      }
    }
    else {
      result.push(stack.shift());
    }
  }
  
  return result;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [2], 3, 4]));
