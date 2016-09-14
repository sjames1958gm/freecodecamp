function mutation(arr) {
  var target = arr[0].toUpperCase();
  var test = arr[1].toUpperCase();
  return test.split("").every(function(c) {
    return target.indexOf(c) != -1;
  });
}

mutation(["hello", "hey"]);
