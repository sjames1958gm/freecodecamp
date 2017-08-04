// jshint esversion:6
function uniteUnique(arr1, arr2, arr3) {
  return [].reduce.call(arguments, (a,c) => a.concat(c))
    .filter((e, i, a) => a.indexOf(e) === i);
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
