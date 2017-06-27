function addTogether() {
  if ((typeof arguments[0] !== "number") ||
      ((arguments.length > 1) && (typeof arguments[1] != "number"))) {
    return undefined;
  }
  
  var b = arguments[0];
  
  if (arguments.length < 2) {
    return function(a) { 
      if (typeof a != "number") {
        return undefined;
      }
      return a + b; 
    };
  } else {
    return arguments[0] + arguments[1];
  }
  
}
