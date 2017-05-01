function chunkArrayInGroups(arr, size) {
  return arr.reduce(function(p, c) {
    p[p.length - 1].length < size) ? p[p.length - 1].push(c) : p.push([c]);
    return p;
  }, [[]]);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
