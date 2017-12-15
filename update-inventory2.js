function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  
  var combine = arr2.reduce(function(acc, cur) {
    for (var i = 0; i < acc.length; i++) {
      if (acc[i][1] === cur[1]) {
        acc[i][0] += cur[0];
        return acc;
      }
    }
    return acc.concat([cur]);
  }, arr1.slice());

  console.log(combine);
  return combine.sort(function(a, b) {
    if (a[1] < b[1]) 
      return -1;
    return 1;
  });
}
