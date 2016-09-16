function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.filter(function(ent) {
    return ent[pre];
  }).length === collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}], "sex");
