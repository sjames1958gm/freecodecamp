function diff(arr1, arr2) {
  var newArr = [];
  
  newArr = arr1.concat(arr2);
  
  newArr = newArr.filter(function(val) {
    return newArr.lastIndexOf(val) == newArr.indexOf(val);
  });  
  
  
  return newArr;
}
