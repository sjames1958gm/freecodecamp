function chunkArrayInGroups(arr, size) {

  var resp = [];
  
  for (var i = 0; i < arr.length; i += size) {
    resp.push(arr.slice(i, i+ size));
  }
  
  return resp;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
