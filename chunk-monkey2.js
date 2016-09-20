function chunkArrayInGroups(arr, size) {

  return arr.reduce(function(p, c) {
    if (p[p.length - 1].length < size) {
      p[p.length - 1].push(c);
    }
    else {
      p.push([c]);
    }
    return p;
  }, [[]]);
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
