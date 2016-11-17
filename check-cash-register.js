function checkCashRegister(price, cash, cid) {
  var change = (cash - price) * 100;
  var changeArray = [];
  
  var drawer = auditDrawer(cid);
    
  while (change > 0) {
    
    console.log(JSON.stringify(drawer));
    
    console.log(JSON.stringify(changeArray));
    
    if ((change >= 10000) && (drawer["ONE HUNDRED"] > 0)) {
        change -= 10000;
        drawer["ONE HUNDRED"]  -= 1;
        changeArray = addToChange(changeArray, "ONE HUNDRED", 100.00);
      
    } else if ((change >= 2000) && (drawer.TWENTY > 0)) {
        change -= 2000;
        drawer.TWENTY -= 1;
        changeArray = addToChange(changeArray, "TWENTY", 20.00);
      
    } else if ((change >= 1000) && (drawer.TEN > 0)) {
        change -= 1000;
        drawer.TEN -= 1;
        changeArray = addToChange(changeArray, "TEN", 10.00);
      
    } else if ((change >= 500) && (drawer.FIVE > 0)) {
        change -= 500;
        drawer.FIVE -= 1;
        changeArray = addToChange(changeArray, "FIVE", 5.00);
      
    } else if ((change >= 100) && (drawer.ONE > 0)) {
        change -= 100;
        drawer.ONE -= 1;
        changeArray = addToChange(changeArray, "ONE", 1.00);
      
    } else if ((change >= 25) && (drawer.QUARTER > 0)) {
        change -= 25;
        drawer.QUARTER -= 1;
        changeArray = addToChange(changeArray, "QUARTER", 0.25);
      
    } else if ((change >= 10) && (drawer.DIME > 0)) {
        change -= 10;
        drawer.DIME -= 1;
        changeArray = addToChange(changeArray, "DIME", 0.10);
      
    } else if ((change >= 5) && (drawer.NICKEL > 0)) {
        change -= 5;
        drawer.NICKEL -= 1;
        changeArray = addToChange(changeArray, "NICKEL", 0.05);
      
    } else if (drawer.PENNY >= 0) {
        change -= 1;
        drawer.PENNY -= 1;
        changeArray = addToChange(changeArray, "PENNY", 0.01);
    } else {
      return "Insufficient Funds";
    }

  }
  
  var drawerContents = Object.keys(drawer).reduce(function(prev, curr) {
     return prev + drawer[curr];
   }, 0);
  
  if (drawerContents === 0)  {
     return  "Closed";
   }
  
  // Here is your change, ma'am.
  return changeArray;
}

function addToChange(change, currency, amount) {

  if ((change.length > 0) && (change[change.length - 1][0] === currency)) {
    change[change.length - 1][1] += amount;
  } else {
    change.push([currency, amount]);
  }
  
  return change;
}

function auditDrawer(cid) {
  var result = {};
  
  for (var i = 0; i < cid.length; i++) {
    
    if (cid[i][0] == "PENNY") {
      result.PENNY = cid[i][1] * 100;
      
    } else if (cid[i][0] == "NICKEL") {
      result.NICKEL = cid[i][1] * 20;
      
    } else if (cid[i][0] == "DIME") {
      result.DIME = cid[i][1] * 10;
      
    } else if (cid[i][0] == "QUARTER") {
      result.QUARTER = cid[i][1] * 4;
      
    } else if (cid[i][0] == "ONE") {
      result.ONE = cid[i][1];
      
    } else if (cid[i][0] == "FIVE") {
      result.FIVE = cid[i][1] / 5;
      
    } else if (cid[i][0] == "TEN") {
      result.TEN = cid[i][1] / 10;
      
    } else if (cid[i][0] == "TWENTY") {
      result.TWENTY = cid[i][1] / 20;
      
    } else if (cid[i][0] == "ONE HUNDRED") {
      result["ONE HUNDRED"] = cid[i][1] / 100;
      
    }
  }
  
  return result;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
