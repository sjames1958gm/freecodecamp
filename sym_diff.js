// jshint esversion:6
function sym(args) {
  return [].reduce.call(arguments, (a, c) => {
    c = removeDups(c);
    return c.filter(notIn, a).concat(a.filter(notIn, c));
  }, []);
}

function notIn(val) {
  return this.indexOf(val) == -1;
}


// Remove duplicates retaining order
function removeDups(arr) {
  return arr.filter(function(val, index, thisArr) {
    return thisArr.indexOf(val) == index;
  });
}


sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
