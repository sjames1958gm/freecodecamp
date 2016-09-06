function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  arr2.forEach(function(item) {
    console.log(item);
    if (arr1.length === 0) {
      arr1.push(item);
    } 
    else {
      for (var i = 0; i < arr1.length; i++) {
        if (item[1] === arr1[i][1]) {
          arr1[i][0] += item[0];
          break;
        } else if (item[1] < arr1[i][1]) {
          var arr = arr1.slice(0, i);
          arr.push(item);
          arr1 = arr.concat(arr1.slice(i));
          break;
        } else if (i === arr1.length - 1) {
          arr1.push(item);
          break;
        }
      }
    }
  });
      
  return arr1;
}
