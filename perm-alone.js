function permutate(arr1, arr2) {
  if (arr2.length === 1) {
    return arr1.concat(arr2);
  }
  else {
    var result = [];
    arr2.forEach(function(item, index, arr) {
      var newarr = arr.slice(0, index).concat(arr.slice(index + 1));
      var perm = permutate(arr1.concat([item]), newarr);
      if (Array.isArray(perm[0]))
        result = result.concat(perm);
      else
        result.push(perm);
    });
    
    return result;
  }
}

function permAlone(str) {
  if (str.length === 1) return; // special case
  
  var arr = str.split("");
  
  var perms = permutate([], arr);

  return perms
    .map(function(p) { p.join(""); })
    .reduce(function (prev, curr) {
      return curr.match(/(.)\1/) ? prev : prev + 1;
    }, 0); 
}

permAlone('aab');
