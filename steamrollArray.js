function steamrollArray(arr) {
  // I'm a steamroller, baby
  var result = [];
  
  arr.forEach(function(val) {
    if (Array.isArray(val)) {
      result = result.concat(steamrollArray(val));
    } else {
      result.push(val);
    }
  });
  
  return result;
}
