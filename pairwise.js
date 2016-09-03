function pairwise(arr, arg) {
  console.log("start");
  var sum = 0;
  var newArr = arr.slice(0);
  
  for (var i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] == "number") {
      for (var j = i + 1; j < newArr.length; j++) {
        if (newArr[i] + newArr[j] == arg) {
          console.log(i, j);
          sum += i + j;
          delete newArr[j];
          break;
        }
      }
    }
  }

  return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);
