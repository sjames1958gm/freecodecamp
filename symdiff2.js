
function sym(args) {
  return [].reduce.call(arguments, function(a, c) {
    return a.filter(function(e, i) { return c.indexOf(e) === -1 && a.indexOf(e) == i; })
      .concat(c.filter(function(e, i) { return a.indexOf(e) === -1 && c.indexOf(e) == i; }));
  });
}
