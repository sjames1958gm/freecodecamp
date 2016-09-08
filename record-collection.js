function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } // from here on we know that value !== ""
  else if (prop !== 'tracks') {
    collection[id][prop] = value;
  } // from here on we know that prop === "tracks"
  else if (collection[id].hasOwnProperty("tracks")) {
    collection[id][prop].push(value);
  } 
  else {
    collection[id][prop] = [value];
  } 
  return collection;
}
