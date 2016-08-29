function convertToRoman(num) {
  
  var result = "";
  
  var cvrt = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], 
              [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], 
              [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  
  var i = 0;
  while (num > 0) {
    if (num >= cvrt[i][0]) {
      result += cvrt[i][1];
      num -= cvrt[i][0];
    }
    else i++;
  }

  return result;
}
